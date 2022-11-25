import {ExpressionsParser} from './generated/ExpressionsParser';
import {Collection, option} from 'scats';
import {ExecutionOptions, ExpressionNode, ValueNode} from './model';


function applyPipe(ctx: any, rootContext: any, options: ExecutionOptions, pipeName: string, ...args: Array<string | number | boolean>) {
    if (options.pipes && options.pipes[pipeName]) {
        return options.pipes[pipeName](ctx, ...args);
    } else {
        throw new Error(`Can't find pipe definition for '${pipeName}'`);
    }
}

function followPath(ctx: any, rootContext: any, path: string, params: ExecutionOptions) {
    if (path === 'constructor' && !params.allowConstructorAccess) {
        if (params.undefinedFields === 'return-undefined') {
            return undefined;
        } else {
            throw new Error('Illegal access to "constructor" property');
        }
    } else {
        return option(ctx)
            .map(obj => obj[path])
            .getOrElse(() => {
                if (params.undefinedFields === 'return-undefined') {
                    return undefined;
                } else {
                    throw new Error(`Can't resolve property '${path}': object is undefined`);
                }
            });
    }
}


function applyMethodCall(expr: ExpressionNode, ctx: any, rootContext: any, params: ExecutionOptions): any {
    const methodName = (expr.children[0] as ValueNode).value as string;
    return option(followPath(ctx, rootContext, methodName, params))
        // todo possible access of global function instead of object method call
        .orElse(() => option(params.functions).map(_ => _[methodName]))
        .map(m => {
            if (expr.children.length == 1) {
                return m.apply(ctx);
            } else {
                const args = Collection.from(expr.children[1].children)
                    .map(next => applyImpl(next, ctx, rootContext, params));
                return m.apply(ctx, args.toArray);
            }
        })
        .getOrElse(() => {
            if (params.undefinedFields === 'return-undefined') {
                return undefined;
            } else {
                throw new Error(`Can't invoke method ${methodName} on undefined object`);
            }
        });
}


function applyPipeRule(expr: ExpressionNode, ctx: any, rootContext: any, params: ExecutionOptions): any {
    let buf = [];
    let res = ctx;
    expr.children.forEach(f => {
        if ('value' in f) {
            if (buf.length > 0 && f.tpe === ExpressionsParser.FIELD) { // next pipe name
                res = applyPipe(res, rootContext, params, buf[0] as string, ...buf.slice(1));
                buf = [];
            }
            buf.push(f.value);
        } else {
            const value = applyImpl(f, ctx, rootContext, params);
            buf.push(value);
        }
    });
    if (buf.length > 0) {
        res = applyPipe(res, rootContext, params, buf[0], ...buf.slice(1));
    }
    return res;
}


function applyIndexedField(expr: ExpressionNode, ctx: any, rootContext: any, params: ExecutionOptions): any {
    const index = Collection.from(expr.children).foldLeft(ctx)((acc, next) => {
        return applyImpl(next, acc, params);
    });

    if (index === 'constructor' && !params.allowConstructorAccess) {
        if (params.undefinedFields === 'return-undefined') {
            return undefined;
        } else {
            throw new Error('Illegal access to "constructor" property');
        }
    } else {
        return option(ctx).map(x => x[index]).getOrElse(() => {
            if (params.undefinedFields === 'return-undefined') {
                return undefined;
            } else {
                throw new Error(`Can't access indexed property [${index}] on undefined object`);
            }
        });

    }

}



function applyImpl(expr: ExpressionNode, ctx: any, rootContext: any, params: ExecutionOptions = {}): any {
    if ('ctx' in expr) {
        switch (expr.ctx) {

            case ExpressionsParser.RULE_path: {
                const pathNodes = Collection.from<ValueNode>(expr.children as ValueNode[]);
                if ('value' in pathNodes.head &&
                    option(ctx).flatMap(c => option(c[pathNodes.head.value as string])).isEmpty) {
                    return pathNodes.foldLeft(rootContext)((acc, next) => {
                        return applyImpl(next, acc, rootContext, params);
                    });
                } else {
                    return pathNodes.foldLeft(ctx)((acc, next) => {
                        return applyImpl(next, acc, rootContext, params);
                    });
                }
            }

            case ExpressionsParser.RULE_pipe:
                return applyPipeRule(expr, ctx, rootContext, params);

            case ExpressionsParser.RULE_methodCall:
                return applyMethodCall(expr, ctx, rootContext, params);

            case ExpressionsParser.RULE_indexedField:
                return applyIndexedField(expr, ctx, rootContext, params);

            default:
                throw new Error(`Not implemented: ${expr.ctx}`);
        }
    } else if (expr.tpe === ExpressionsParser.STRING) {
        return expr.value as string;
    } else if (expr.tpe === ExpressionsParser.NUMBER) {
        return expr.value as number;
    } else if (expr.tpe === ExpressionsParser.BOOL) {
        return expr.value as boolean;
    } else if (expr.tpe === ExpressionsParser.OPERATOR1) {
        const v1 = applyImpl(expr.children[0], ctx, rootContext, params);
        const v2 = applyImpl(expr.children[1], ctx, rootContext, params);
        switch (expr.value) {
            case '+':
                return v1 + v2;
            case '-':
                return v1 - v2;
            case '>':
                return v1 > v2;
            case '<':
                return v1 < v2;
            case '>=':
                return v1 >= v2;
            case '<=':
                return v1 <= v2;
        }
    } else if (expr.tpe === ExpressionsParser.OPERATOR2) {
        const v1 = applyImpl(expr.children[0], ctx, rootContext, params);
        const v2 = applyImpl(expr.children[1], ctx, rootContext, params);
        switch (expr.value) {
            case '*':
                return v1 * v2;
            case '/':
                return v1 / v2;
        }
    } else if (expr.tpe === ExpressionsParser.OPERATOR3) {
        const v1 = applyImpl(expr.children[0], ctx, rootContext, params);
        const v2 = applyImpl(expr.children[1], ctx, rootContext, params);
        switch (expr.value) {
            case '&&':
                return v1 && v2;
            case '||':
                return v1 || v2;
            case '==':
                return v1 == v2;
            case '!=':
                return v1 != v2;
        }
    } else if (expr.tpe === ExpressionsParser.FIELD) {
        return followPath(ctx, rootContext, expr.value as string, params);
    } else {
        throw new Error(`Unimplemented: ${expr.value}`);
    }
}


export function apply(expr: ExpressionNode, ctx: any, params: ExecutionOptions = {}): any {
    return applyImpl(expr, ctx, {...ctx}, params);
}




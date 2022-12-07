import {TerminalNode} from 'antlr4ts/tree/TerminalNode';
import {ContainerNode, ExpressionNode, ValueNode} from './model';
import {
    ExpressionContext,
    ExpressionsParser,
    IndexedFieldContext, MethodArgContext,
    MethodArgsContext,
    MethodCallContext,
    PathContext, PipeArgContext, PipeContext, PipeNameContext, ValueContext
} from './generated/ExpressionsParser';
import {Collection, option} from 'scats';
import {ParseTree} from 'antlr4ts/tree/ParseTree';

function unwrapString(str: string): string {
    if (!str || str.length <= 2) {
        return str;
    } else if (str[0] === '"' && str[str.length - 1] === '"') {
        return str.slice(1, str.length - 1);
    } else if (str[0] === '\'' && str[str.length - 1] === '\'') {
        return str.slice(1, str.length - 1);
    } else {
        return str;
    }
}



function convertTerminalNode(node: TerminalNode): ValueNode {
    switch (node.symbol.type) {
        case ExpressionsParser.NUMBER:
            return {
                tpe: node.symbol.type,
                value: parseFloat(node.text)
            };
        case ExpressionsParser.STRING:
            return {
                tpe: node.symbol.type,
                value: unwrapString(node.text)
            };
        case ExpressionsParser.BOOL:
            return {
                tpe: node.symbol.type,
                value: node.text == 'true'
            };
        default:
            return {
                tpe: node.symbol.type,
                value: node.text
            };
    }

}

function convertMethodCall(x: MethodCallContext): ExpressionNode {
    const args = option(x.children)
        .filter(c => c.length > 3)
        .map(c => Collection.from(c).drop(2).dropRight(1))
        .map(children => ({
            ctx: ExpressionsParser.RULE_methodArgs,
            children: Collection.from((children.head as MethodArgsContext).children)
                .filter(x => x.text !== ',')
                .map(convertNode).toArray
        } as ExpressionNode));


    return {
        ctx: ExpressionsParser.RULE_methodCall,
        children: [
            convertNode(x.children[0]),
        ].concat(args.map(x => [x]).getOrElseValue([]))
    };

}


function convertPathNode(node: PathContext): ContainerNode {
    return {
        ctx: ExpressionsParser.RULE_path,
        children: Collection.from(option<ParseTree[]>(node.children).getOrElseValue([]))
            .filter(x => x.text !== '.')
            .flatMap(x => {
                if (x instanceof IndexedFieldContext) {
                    return Collection.of(
                        convertNode(x.children[0]), {
                            ctx: ExpressionsParser.RULE_indexedField,
                            children: Collection.from(option(x.children).getOrElseValue([]))
                                .drop(2)
                                .dropRight(1)
                                .map(i => convertNode(i)).toArray
                        }
                    );
                } else {
                    return Collection.of(convertNode(x));
                }
            }).toArray
    };
}



function convertPipeNode(node: PipeContext): ContainerNode {
    const path = convertPathNode(node.getChild(0) as PathContext);

    let buf: ExpressionNode[] = [];

    Collection.from(option(node.children).getOrElseValue([]))
        .drop(1)
        .filter(x => x.text !== '|')
        .foreach(x => {
            if (x instanceof PipeNameContext && buf.length > 0) {
                path.children.push({
                    ctx: ExpressionsParser.RULE_pipe,
                    children: buf
                });
                buf = [];
            }
            buf.push(convertNode(x));
        });

    if (buf.length > 0) {
        path.children.push({
            ctx: ExpressionsParser.RULE_pipe,
            children: buf
        });
    }
    return path;
}

function convertNode(node: ParseTree): ExpressionNode {

    if (node instanceof TerminalNode) {
        return convertTerminalNode(node);
    } else if (node instanceof PipeContext) {
        return convertPipeNode(node);
    } else if (node instanceof MethodCallContext) {
        return convertMethodCall(node);
    } else if (node instanceof PipeArgContext) {
        const children = Collection.from(option(node.children).getOrElseValue([]));
        if (children.size == 2) { // `:arg`, `:"string"`, `:123`
            return convertNode(node.getChild(1));
        } else if (children.size == 4) { // `:(another_pipe)`
            return convertNode(node.getChild(2));
        } else {
            throw new Error('Unrecognized pipe argument: ' + node.text);
        }

    } else if (node instanceof PathContext) {
        return convertPathNode(node);
    } else {
        const c = node.childCount;
        if (c === 1) {
            if (node instanceof ValueContext) {
                return convertNode(node.getChild(0));
            } else if (node instanceof ExpressionContext) {
                return convertNode(node.getChild(0));
            } else if (node instanceof PipeNameContext) {
                return convertNode(node.getChild(0));
            } else if (node instanceof MethodArgContext) {
                return convertNode(node.getChild(0));
            } else if (node instanceof PathContext) {
                return ({
                    ...convertNode(node.getChild(0)),
                    ctx: ExpressionsParser.RULE_path
                });
            } else {
                throw new Error('unimplemented');
            }
        } else if (c === 3) {
            const leftChild = node.getChild(0);
            const middleChild = node.getChild(1);
            const rightChild = node.getChild(2);
            if (leftChild.text === '(' && rightChild.text === ')') {
                // expression in brackets: (a)
                return convertNode(middleChild);
            } else if (middleChild instanceof TerminalNode && (
                middleChild.symbol.type === ExpressionsParser.OPERATOR1 ||
                middleChild.symbol.type === ExpressionsParser.OPERATOR2 ||
                middleChild.symbol.type === ExpressionsParser.OPERATOR3
            )) {
                // expression with operator: a * b
                return {
                    value: middleChild.text,
                    tpe: middleChild.symbol.type,
                    children: [
                        convertNode(leftChild),
                        convertNode(rightChild)
                    ]
                } as ValueNode;
            } else if (middleChild instanceof TerminalNode && (middleChild.symbol.text === '.')) {
                return {
                    ctx: ExpressionsParser.RULE_path,
                    children: [
                        convertNode(leftChild),
                        convertNode(rightChild)
                    ]
                };
            } else {
                throw new Error('unimplemented');
            }
        } else {
            throw new Error(`Unimplemented: ${node.text}`);
        }
    }

}

export function toAST(ctx: ExpressionContext): ExpressionNode {
    return convertNode(ctx);
}

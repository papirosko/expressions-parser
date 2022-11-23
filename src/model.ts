export interface ContainerNode {
    ctx: number;
    children: ExpressionNode[];
}

export interface ValueNode {
    value: boolean | string | number;
    tpe: number;
    children?: ExpressionNode[];
}


export type TFunction = (...args: any) => any;
export type Pipe = (obj: any, ...args: any) => any;


export interface ExecutionOptions {
    undefinedFields?: 'return-undefined' | 'throw-error';
    allowConstructorAccess?: boolean;
    functions?: {
        [key: string]: TFunction;
    };
    pipes?: {
        [key: string]: Pipe;
    };
}

export type ExpressionNode = ContainerNode | ValueNode;


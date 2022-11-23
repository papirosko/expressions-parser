// Generated from Expressions.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StartContext } from "./ExpressionsParser";
import { ValueContext } from "./ExpressionsParser";
import { IndexedFieldContext } from "./ExpressionsParser";
import { PathContext } from "./ExpressionsParser";
import { MethodArgContext } from "./ExpressionsParser";
import { MethodArgsContext } from "./ExpressionsParser";
import { MethodCallContext } from "./ExpressionsParser";
import { PipeNameContext } from "./ExpressionsParser";
import { PipeArgContext } from "./ExpressionsParser";
import { PipeContext } from "./ExpressionsParser";
import { ExpressionContext } from "./ExpressionsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExpressionsParser`.
 */
export interface ExpressionsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ExpressionsParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.indexedField`.
	 * @param ctx the parse tree
	 */
	enterIndexedField?: (ctx: IndexedFieldContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.indexedField`.
	 * @param ctx the parse tree
	 */
	exitIndexedField?: (ctx: IndexedFieldContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.methodArg`.
	 * @param ctx the parse tree
	 */
	enterMethodArg?: (ctx: MethodArgContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.methodArg`.
	 * @param ctx the parse tree
	 */
	exitMethodArg?: (ctx: MethodArgContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.methodArgs`.
	 * @param ctx the parse tree
	 */
	enterMethodArgs?: (ctx: MethodArgsContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.methodArgs`.
	 * @param ctx the parse tree
	 */
	exitMethodArgs?: (ctx: MethodArgsContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.pipeName`.
	 * @param ctx the parse tree
	 */
	enterPipeName?: (ctx: PipeNameContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.pipeName`.
	 * @param ctx the parse tree
	 */
	exitPipeName?: (ctx: PipeNameContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.pipeArg`.
	 * @param ctx the parse tree
	 */
	enterPipeArg?: (ctx: PipeArgContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.pipeArg`.
	 * @param ctx the parse tree
	 */
	exitPipeArg?: (ctx: PipeArgContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.pipe`.
	 * @param ctx the parse tree
	 */
	enterPipe?: (ctx: PipeContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.pipe`.
	 * @param ctx the parse tree
	 */
	exitPipe?: (ctx: PipeContext) => void;

	/**
	 * Enter a parse tree produced by `ExpressionsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ExpressionsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}


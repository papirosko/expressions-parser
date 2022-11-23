// Generated from Expressions.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExpressionsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ExpressionsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ExpressionsParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.indexedField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexedField?: (ctx: IndexedFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.methodArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodArg?: (ctx: MethodArgContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.methodArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodArgs?: (ctx: MethodArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.pipeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipeName?: (ctx: PipeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.pipeArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipeArg?: (ctx: PipeArgContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.pipe`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipe?: (ctx: PipeContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpressionsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}


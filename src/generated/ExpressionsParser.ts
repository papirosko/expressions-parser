// Generated from Expressions.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ExpressionsListener } from "./ExpressionsListener";
import { ExpressionsVisitor } from "./ExpressionsVisitor";


export class ExpressionsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly WS = 9;
	public static readonly OPERATOR1 = 10;
	public static readonly OPERATOR2 = 11;
	public static readonly OPERATOR3 = 12;
	public static readonly BOOL = 13;
	public static readonly STRING = 14;
	public static readonly NUMBER = 15;
	public static readonly FIELD = 16;
	public static readonly RULE_start = 0;
	public static readonly RULE_value = 1;
	public static readonly RULE_indexedField = 2;
	public static readonly RULE_path = 3;
	public static readonly RULE_methodArg = 4;
	public static readonly RULE_methodArgs = 5;
	public static readonly RULE_methodCall = 6;
	public static readonly RULE_pipeName = 7;
	public static readonly RULE_pipeArg = 8;
	public static readonly RULE_pipe = 9;
	public static readonly RULE_expression = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "value", "indexedField", "path", "methodArg", "methodArgs", "methodCall", 
		"pipeName", "pipeArg", "pipe", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'.'", "','", "'('", "')'", "':'", "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "WS", "OPERATOR1", "OPERATOR2", "OPERATOR3", "BOOL", 
		"STRING", "NUMBER", "FIELD",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExpressionsParser._LITERAL_NAMES, ExpressionsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExpressionsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Expressions.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExpressionsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExpressionsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExpressionsParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ExpressionsParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ExpressionsParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionsParser.BOOL) | (1 << ExpressionsParser.STRING) | (1 << ExpressionsParser.NUMBER))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexedField(): IndexedFieldContext {
		let _localctx: IndexedFieldContext = new IndexedFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ExpressionsParser.RULE_indexedField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(ExpressionsParser.FIELD);
			this.state = 27;
			this.match(ExpressionsParser.T__0);
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExpressionsParser.FIELD:
				{
				this.state = 28;
				this.path();
				}
				break;
			case ExpressionsParser.NUMBER:
				{
				this.state = 29;
				this.match(ExpressionsParser.NUMBER);
				}
				break;
			case ExpressionsParser.STRING:
				{
				this.state = 30;
				this.match(ExpressionsParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 33;
			this.match(ExpressionsParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ExpressionsParser.RULE_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 35;
				this.match(ExpressionsParser.FIELD);
				}
				break;

			case 2:
				{
				this.state = 36;
				this.indexedField();
				}
				break;

			case 3:
				{
				this.state = 37;
				this.methodCall();
				}
				break;
			}
			this.state = 48;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 40;
					this.match(ExpressionsParser.T__2);
					this.state = 44;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						this.state = 41;
						this.match(ExpressionsParser.FIELD);
						}
						break;

					case 2:
						{
						this.state = 42;
						this.indexedField();
						}
						break;

					case 3:
						{
						this.state = 43;
						this.methodCall();
						}
						break;
					}
					}
					}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodArg(): MethodArgContext {
		let _localctx: MethodArgContext = new MethodArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ExpressionsParser.RULE_methodArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 51;
				this.pipe();
				}
				break;

			case 2:
				{
				this.state = 52;
				this.path();
				}
				break;

			case 3:
				{
				this.state = 53;
				this.match(ExpressionsParser.STRING);
				}
				break;

			case 4:
				{
				this.state = 54;
				this.match(ExpressionsParser.NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodArgs(): MethodArgsContext {
		let _localctx: MethodArgsContext = new MethodArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ExpressionsParser.RULE_methodArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.methodArg();
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ExpressionsParser.T__3) {
				{
				{
				this.state = 58;
				this.match(ExpressionsParser.T__3);
				this.state = 59;
				this.methodArg();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ExpressionsParser.RULE_methodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(ExpressionsParser.FIELD);
			this.state = 66;
			this.match(ExpressionsParser.T__4);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionsParser.STRING) | (1 << ExpressionsParser.NUMBER) | (1 << ExpressionsParser.FIELD))) !== 0)) {
				{
				this.state = 67;
				this.methodArgs();
				}
			}

			this.state = 70;
			this.match(ExpressionsParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pipeName(): PipeNameContext {
		let _localctx: PipeNameContext = new PipeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ExpressionsParser.RULE_pipeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(ExpressionsParser.FIELD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pipeArg(): PipeArgContext {
		let _localctx: PipeArgContext = new PipeArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ExpressionsParser.RULE_pipeArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(ExpressionsParser.T__6);
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 75;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 76;
				this.methodCall();
				}
				break;

			case 3:
				{
				this.state = 77;
				this.path();
				}
				break;

			case 4:
				{
				this.state = 78;
				this.match(ExpressionsParser.T__4);
				this.state = 79;
				this.pipe();
				this.state = 80;
				this.match(ExpressionsParser.T__5);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pipe(): PipeContext {
		let _localctx: PipeContext = new PipeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ExpressionsParser.RULE_pipe);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.path();
			this.state = 93;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 85;
					this.match(ExpressionsParser.T__7);
					this.state = 86;
					this.pipeName();
					this.state = 90;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 87;
							this.pipeArg();
							}
							}
						}
						this.state = 92;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 95;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, ExpressionsParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 98;
				this.match(ExpressionsParser.T__4);
				this.state = 99;
				this.expression(0);
				this.state = 100;
				this.match(ExpressionsParser.T__5);
				}
				break;

			case 2:
				{
				this.state = 102;
				this.pipe();
				}
				break;

			case 3:
				{
				this.state = 103;
				this.path();
				}
				break;

			case 4:
				{
				this.state = 104;
				this.value();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 119;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ExpressionsParser.RULE_expression);
						this.state = 107;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 108;
						this.match(ExpressionsParser.OPERATOR2);
						this.state = 109;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ExpressionsParser.RULE_expression);
						this.state = 110;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 111;
						this.match(ExpressionsParser.OPERATOR1);
						this.state = 112;
						this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ExpressionsParser.RULE_expression);
						this.state = 113;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 114;
						this.match(ExpressionsParser.OPERATOR3);
						this.state = 115;
						this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ExpressionsParser.RULE_expression);
						this.state = 116;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 117;
						this.match(ExpressionsParser.T__2);
						this.state = 118;
						this.path();
						}
						break;
					}
					}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12\x7F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\"\n\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05)\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05/\n\x05\x07\x051\n\x05\f\x05\x0E\x054\v\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06:\n\x06\x03\x07\x03\x07\x03\x07\x07" +
		"\x07?\n\x07\f\x07\x0E\x07B\v\x07\x03\b\x03\b\x03\b\x05\bG\n\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nU" +
		"\n\n\x03\v\x03\v\x03\v\x03\v\x07\v[\n\v\f\v\x0E\v^\v\v\x06\v`\n\v\r\v" +
		"\x0E\va\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fl\n\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07" +
		"\fz\n\f\f\f\x0E\f}\v\f\x03\f\x02\x02\x03\x16\r\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x03\x03" +
		"\x02\x0F\x11\x02\x8B\x02\x18\x03\x02\x02\x02\x04\x1A\x03\x02\x02\x02\x06" +
		"\x1C\x03\x02\x02\x02\b(\x03\x02\x02\x02\n9\x03\x02\x02\x02\f;\x03\x02" +
		"\x02\x02\x0EC\x03\x02\x02\x02\x10J\x03\x02\x02\x02\x12L\x03\x02\x02\x02" +
		"\x14V\x03\x02\x02\x02\x16k\x03\x02\x02\x02\x18\x19\x05\x16\f\x02\x19\x03" +
		"\x03\x02\x02\x02\x1A\x1B\t\x02\x02\x02\x1B\x05\x03\x02\x02\x02\x1C\x1D" +
		"\x07\x12\x02\x02\x1D!\x07\x03\x02\x02\x1E\"\x05\b\x05\x02\x1F\"\x07\x11" +
		"\x02\x02 \"\x07\x10\x02\x02!\x1E\x03\x02\x02\x02!\x1F\x03\x02\x02\x02" +
		"! \x03\x02\x02\x02\"#\x03\x02\x02\x02#$\x07\x04\x02\x02$\x07\x03\x02\x02" +
		"\x02%)\x07\x12\x02\x02&)\x05\x06\x04\x02\')\x05\x0E\b\x02(%\x03\x02\x02" +
		"\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02)2\x03\x02\x02\x02*.\x07\x05" +
		"\x02\x02+/\x07\x12\x02\x02,/\x05\x06\x04\x02-/\x05\x0E\b\x02.+\x03\x02" +
		"\x02\x02.,\x03\x02\x02\x02.-\x03\x02\x02\x02/1\x03\x02\x02\x020*\x03\x02" +
		"\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x023\t\x03" +
		"\x02\x02\x0242\x03\x02\x02\x025:\x05\x14\v\x026:\x05\b\x05\x027:\x07\x10" +
		"\x02\x028:\x07\x11\x02\x0295\x03\x02\x02\x0296\x03\x02\x02\x0297\x03\x02" +
		"\x02\x0298\x03\x02\x02\x02:\v\x03\x02\x02\x02;@\x05\n\x06\x02<=\x07\x06" +
		"\x02\x02=?\x05\n\x06\x02><\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02" +
		"\x02\x02@A\x03\x02\x02\x02A\r\x03\x02\x02\x02B@\x03\x02\x02\x02CD\x07" +
		"\x12\x02\x02DF\x07\x07\x02\x02EG\x05\f\x07\x02FE\x03\x02\x02\x02FG\x03" +
		"\x02\x02\x02GH\x03\x02\x02\x02HI\x07\b\x02\x02I\x0F\x03\x02\x02\x02JK" +
		"\x07\x12\x02\x02K\x11\x03\x02\x02\x02LT\x07\t\x02\x02MU\x05\x04\x03\x02" +
		"NU\x05\x0E\b\x02OU\x05\b\x05\x02PQ\x07\x07\x02\x02QR\x05\x14\v\x02RS\x07" +
		"\b\x02\x02SU\x03\x02\x02\x02TM\x03\x02\x02\x02TN\x03\x02\x02\x02TO\x03" +
		"\x02\x02\x02TP\x03\x02\x02\x02U\x13\x03\x02\x02\x02V_\x05\b\x05\x02WX" +
		"\x07\n\x02\x02X\\\x05\x10\t\x02Y[\x05\x12\n\x02ZY\x03\x02\x02\x02[^\x03" +
		"\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]`\x03\x02\x02\x02^" +
		"\\\x03\x02\x02\x02_W\x03\x02\x02\x02`a\x03\x02\x02\x02a_\x03\x02\x02\x02" +
		"ab\x03\x02\x02\x02b\x15\x03\x02\x02\x02cd\b\f\x01\x02de\x07\x07\x02\x02" +
		"ef\x05\x16\f\x02fg\x07\b\x02\x02gl\x03\x02\x02\x02hl\x05\x14\v\x02il\x05" +
		"\b\x05\x02jl\x05\x04\x03\x02kc\x03\x02\x02\x02kh\x03\x02\x02\x02ki\x03" +
		"\x02\x02\x02kj\x03\x02\x02\x02l{\x03\x02\x02\x02mn\f\b\x02\x02no\x07\r" +
		"\x02\x02oz\x05\x16\f\tpq\f\x07\x02\x02qr\x07\f\x02\x02rz\x05\x16\f\bs" +
		"t\f\x06\x02\x02tu\x07\x0E\x02\x02uz\x05\x16\f\x07vw\f\t\x02\x02wx\x07" +
		"\x05\x02\x02xz\x05\b\x05\x02ym\x03\x02\x02\x02yp\x03\x02\x02\x02ys\x03" +
		"\x02\x02\x02yv\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03" +
		"\x02\x02\x02|\x17\x03\x02\x02\x02}{\x03\x02\x02\x02\x0F!(.29@FT\\aky{";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExpressionsParser.__ATN) {
			ExpressionsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExpressionsParser._serializedATN));
		}

		return ExpressionsParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_start; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.STRING, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.BOOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_value; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexedFieldContext extends ParserRuleContext {
	public FIELD(): TerminalNode { return this.getToken(ExpressionsParser.FIELD, 0); }
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_indexedField; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterIndexedField) {
			listener.enterIndexedField(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitIndexedField) {
			listener.exitIndexedField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitIndexedField) {
			return visitor.visitIndexedField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public FIELD(): TerminalNode[];
	public FIELD(i: number): TerminalNode;
	public FIELD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ExpressionsParser.FIELD);
		} else {
			return this.getToken(ExpressionsParser.FIELD, i);
		}
	}
	public indexedField(): IndexedFieldContext[];
	public indexedField(i: number): IndexedFieldContext;
	public indexedField(i?: number): IndexedFieldContext | IndexedFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexedFieldContext);
		} else {
			return this.getRuleContext(i, IndexedFieldContext);
		}
	}
	public methodCall(): MethodCallContext[];
	public methodCall(i: number): MethodCallContext;
	public methodCall(i?: number): MethodCallContext | MethodCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodCallContext);
		} else {
			return this.getRuleContext(i, MethodCallContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_path; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodArgContext extends ParserRuleContext {
	public pipe(): PipeContext | undefined {
		return this.tryGetRuleContext(0, PipeContext);
	}
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_methodArg; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterMethodArg) {
			listener.enterMethodArg(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitMethodArg) {
			listener.exitMethodArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitMethodArg) {
			return visitor.visitMethodArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodArgsContext extends ParserRuleContext {
	public methodArg(): MethodArgContext[];
	public methodArg(i: number): MethodArgContext;
	public methodArg(i?: number): MethodArgContext | MethodArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodArgContext);
		} else {
			return this.getRuleContext(i, MethodArgContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_methodArgs; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterMethodArgs) {
			listener.enterMethodArgs(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitMethodArgs) {
			listener.exitMethodArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitMethodArgs) {
			return visitor.visitMethodArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public FIELD(): TerminalNode { return this.getToken(ExpressionsParser.FIELD, 0); }
	public methodArgs(): MethodArgsContext | undefined {
		return this.tryGetRuleContext(0, MethodArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PipeNameContext extends ParserRuleContext {
	public FIELD(): TerminalNode { return this.getToken(ExpressionsParser.FIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_pipeName; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterPipeName) {
			listener.enterPipeName(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitPipeName) {
			listener.exitPipeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitPipeName) {
			return visitor.visitPipeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PipeArgContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	public pipe(): PipeContext | undefined {
		return this.tryGetRuleContext(0, PipeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_pipeArg; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterPipeArg) {
			listener.enterPipeArg(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitPipeArg) {
			listener.exitPipeArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitPipeArg) {
			return visitor.visitPipeArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PipeContext extends ParserRuleContext {
	public path(): PathContext {
		return this.getRuleContext(0, PathContext);
	}
	public pipeName(): PipeNameContext[];
	public pipeName(i: number): PipeNameContext;
	public pipeName(i?: number): PipeNameContext | PipeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PipeNameContext);
		} else {
			return this.getRuleContext(i, PipeNameContext);
		}
	}
	public pipeArg(): PipeArgContext[];
	public pipeArg(i: number): PipeArgContext;
	public pipeArg(i?: number): PipeArgContext | PipeArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PipeArgContext);
		} else {
			return this.getRuleContext(i, PipeArgContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_pipe; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterPipe) {
			listener.enterPipe(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitPipe) {
			listener.exitPipe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitPipe) {
			return visitor.visitPipe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	public OPERATOR2(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.OPERATOR2, 0); }
	public OPERATOR1(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.OPERATOR1, 0); }
	public OPERATOR3(): TerminalNode | undefined { return this.tryGetToken(ExpressionsParser.OPERATOR3, 0); }
	public pipe(): PipeContext | undefined {
		return this.tryGetRuleContext(0, PipeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionsParser.RULE_expression; }
	// @Override
	public enterRule(listener: ExpressionsListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionsListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionsVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



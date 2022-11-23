import {ExpressionNode, parseInput, toAST} from '../src';
import {ExpressionsParser} from '../src/generated/ExpressionsParser';

describe('toAst', () => {


    test('with number', () => {
        const res = toAST(parseInput('1'));
        expect(res).toEqual({
            value: 1,
            tpe: ExpressionsParser.NUMBER
        });
    });

    test('with string', () => {
        expect(toAST(parseInput('"aa"'))).toEqual({
            value: 'aa',
            tpe: ExpressionsParser.STRING
        });
        expect(toAST(parseInput('\'aa\''))).toEqual({
            value: 'aa',
            tpe: ExpressionsParser.STRING
        });
    });

    test('with field', () => {
        expect(toAST(parseInput('aa'))).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                value: 'aa',
                tpe: ExpressionsParser.FIELD
            }]
        });
        expect(toAST(parseInput('_aa'))).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                value: '_aa',
                tpe: ExpressionsParser.FIELD
            }]
        });
        expect(toAST(parseInput('a_a'))).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                value: 'a_a',
                tpe: ExpressionsParser.FIELD
            }]
        });
    });

    test('with bool', () => {
        expect(toAST(parseInput('true'))).toEqual({
            value: true,
            tpe: ExpressionsParser.BOOL
        });
        expect(toAST(parseInput('false'))).toEqual({
            value: false,
            tpe: ExpressionsParser.BOOL
        });
    });

    test('with simple op', () => {
        const res = toAST(parseInput('(1 + 1) * (2 + a) + 3'));

        expect(res).toEqual({
            value: '+',
            tpe: ExpressionsParser.OPERATOR1,
            children: [{
                value: '*',
                tpe: ExpressionsParser.OPERATOR2,
                children: [{
                    value: '+',
                    tpe: ExpressionsParser.OPERATOR1,
                    children: [{
                        value: 1,
                        tpe: ExpressionsParser.NUMBER
                    }, {
                        value: 1,
                        tpe: ExpressionsParser.NUMBER
                    }]
                }, {
                    value: '+',
                    tpe: ExpressionsParser.OPERATOR1,
                    children: [{
                        value: 2,
                        tpe: ExpressionsParser.NUMBER
                    }, {
                        ctx: ExpressionsParser.RULE_path,
                        children: [{
                            value: 'a',
                            tpe: ExpressionsParser.FIELD,
                        }]
                    }]
                }]
            }, {
                value: 3,
                tpe: ExpressionsParser.NUMBER
            }]
        } as ExpressionNode);
    });

    test('with path', () => {
        const res = toAST(parseInput('1 + a.b.c'));

        expect(res).toEqual({
            value: '+',
            tpe: ExpressionsParser.OPERATOR1,
            children: [{
                value: 1,
                tpe: ExpressionsParser.NUMBER
            }, {
                ctx: ExpressionsParser.RULE_path,
                children: [{
                    value: 'a',
                    tpe: ExpressionsParser.FIELD
                }, {
                    value: 'b',
                    tpe: ExpressionsParser.FIELD
                }, {
                    value: 'c',
                    tpe: ExpressionsParser.FIELD
                }]
            }]
        } as ExpressionNode);
    });

    test('with numeric index', () => {
        const res = toAST(parseInput('1 + a.b[c.d[0]].e'));

        expect(res).toEqual({
            value: '+',
            tpe: ExpressionsParser.OPERATOR1,
            children: [{
                value: 1,
                tpe: ExpressionsParser.NUMBER
            }, {
                ctx: ExpressionsParser.RULE_path,
                children: [{
                    value: 'a',
                    tpe: ExpressionsParser.FIELD,
                }, {
                    value: 'b',
                    tpe: ExpressionsParser.FIELD,
                }, {
                    ctx: ExpressionsParser.RULE_indexedField,
                    children: [{
                        ctx: ExpressionsParser.RULE_path,
                        children: [{
                            value: 'c',
                            tpe: ExpressionsParser.FIELD,
                        }, {
                            value: 'd',
                            tpe: ExpressionsParser.FIELD,
                        }, {
                            ctx: ExpressionsParser.RULE_indexedField,
                            children: [{
                                value: 0,
                                tpe: ExpressionsParser.NUMBER,
                            }]
                        }]
                    }]
                }, {
                    value: 'e',
                    tpe: ExpressionsParser.FIELD,
                }]
            }]
        } as ExpressionNode);
    });

    test('with string index', () => {
        const res = toAST(parseInput('1 + a.b[c.d["field"]].e'));

        expect(res).toEqual({
            value: '+',
            tpe: ExpressionsParser.OPERATOR1,
            children: [{
                value: 1,
                tpe: ExpressionsParser.NUMBER
            }, {
                ctx: ExpressionsParser.RULE_path,
                children: [{
                    value: 'a',
                    tpe: ExpressionsParser.FIELD,
                }, {
                    value: 'b',
                    tpe: ExpressionsParser.FIELD,
                }, {
                    ctx: ExpressionsParser.RULE_indexedField,
                    children: [{
                        ctx: ExpressionsParser.RULE_path,
                        children: [{
                            value: 'c',
                            tpe: ExpressionsParser.FIELD,
                        }, {
                            value: 'd',
                            tpe: ExpressionsParser.FIELD,
                        }, {
                            ctx: ExpressionsParser.RULE_indexedField,
                            children: [{
                                value: 'field',
                                tpe: ExpressionsParser.STRING,
                            }]
                        }]
                    }]
                }, {
                    value: 'e',
                    tpe: ExpressionsParser.FIELD,
                }]
            }]
        } as ExpressionNode);
    });

    test('with empty method call (no args)', () => {
        const res = toAST(parseInput('a.b()'));

        expect(res).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                value: 'a',
                tpe: ExpressionsParser.FIELD
            }, {
                ctx: ExpressionsParser.RULE_methodCall,
                children: [{
                    value: 'b',
                    tpe: ExpressionsParser.FIELD
                }]
            }]
        } as ExpressionNode);


    });

    test('with path in the end of expression', () => {

        expect(toAST(parseInput('a.b().c'))).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                value: 'a',
                tpe: ExpressionsParser.FIELD
            }, {
                ctx: ExpressionsParser.RULE_methodCall,
                children: [{
                    value: 'b',
                    tpe: ExpressionsParser.FIELD
                }]
            }, {
                value: 'c',
                tpe: ExpressionsParser.FIELD
            }]
        } as ExpressionNode);
    });

    test('with method call (with args)', () => {
        const res = toAST(parseInput('a.b(1, c, "d")'));

        expect(res).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                value: 'a',
                tpe: ExpressionsParser.FIELD
            }, {
                ctx: ExpressionsParser.RULE_methodCall,
                children: [{
                    value: 'b',
                    tpe: ExpressionsParser.FIELD
                }, {
                    ctx: ExpressionsParser.RULE_methodArgs,
                    children: [{
                        value: 1,
                        tpe: ExpressionsParser.NUMBER
                    }, {
                        ctx: ExpressionsParser.RULE_path,
                        children: [{
                            value: 'c',
                            tpe: ExpressionsParser.FIELD
                        }]
                    }, {
                        value: 'd',
                        tpe: ExpressionsParser.STRING
                    }]
                }]
            }]
        } as ExpressionNode);


    });

    test('with pipe (no args)', () => {
        const res = toAST(parseInput('a.b | size'));
        expect(res).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                value: 'a',
                tpe: ExpressionsParser.FIELD
            }, {
                value: 'b',
                tpe: ExpressionsParser.FIELD
            }, {
                ctx: ExpressionsParser.RULE_pipe,
                children: [{
                    value: 'size',
                    tpe: ExpressionsParser.FIELD
                }]
            }]
        } as ExpressionNode);
    });

    test('with pipe (with args)', () => {
        const res = toAST(parseInput('a.b | withName:"xxx" | size'));
        expect(res).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                value: 'a',
                tpe: ExpressionsParser.FIELD
            }, {
                value: 'b',
                tpe: ExpressionsParser.FIELD
            }, {
                ctx: ExpressionsParser.RULE_pipe,
                children: [{
                    value: 'withName',
                    tpe: ExpressionsParser.FIELD
                }, {
                    value: 'xxx',
                    tpe: ExpressionsParser.STRING
                }]
            }, {
                ctx: ExpressionsParser.RULE_pipe,
                children: [{
                    value: 'size',
                    tpe: ExpressionsParser.FIELD
                }]
            }]
        } as ExpressionNode);
    });

    test('with method call with pipe (with args)', () => {
        const res = toAST(parseInput('max(a.b | withName:"xxx" | size)'));
        expect(res).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                ctx: ExpressionsParser.RULE_methodCall,
                children: [{
                    value: 'max',
                    tpe: ExpressionsParser.FIELD
                }, {
                    ctx: ExpressionsParser.RULE_methodArgs,
                    children: [{
                        ctx: ExpressionsParser.RULE_path,
                        children: [{
                            value: 'a',
                            tpe: ExpressionsParser.FIELD
                        }, {
                            value: 'b',
                            tpe: ExpressionsParser.FIELD
                        }, {
                            ctx: ExpressionsParser.RULE_pipe,
                            children: [{
                                value: 'withName',
                                tpe: ExpressionsParser.FIELD
                            }, {
                                value: 'xxx',
                                tpe: ExpressionsParser.STRING
                            }]
                        }, {
                            ctx: ExpressionsParser.RULE_pipe,
                            children: [{
                                value: 'size',
                                tpe: ExpressionsParser.FIELD
                            }]
                        }]
                    }]
                }]
            }]
        } as ExpressionNode);
    });

    test('with with pipe with method call and field as arg', () => {
        const res = toAST(parseInput('max(a.b | filter:array("c", "d"):field)'));
        expect(res).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                ctx: ExpressionsParser.RULE_methodCall,
                children: [{
                    value: 'max',
                    tpe: ExpressionsParser.FIELD
                }, {
                    ctx: ExpressionsParser.RULE_methodArgs,
                    children: [{
                        ctx: ExpressionsParser.RULE_path,
                        children: [{
                            value: 'a',
                            tpe: ExpressionsParser.FIELD
                        }, {
                            value: 'b',
                            tpe: ExpressionsParser.FIELD
                        }, {
                            ctx: ExpressionsParser.RULE_pipe,
                            children: [{
                                value: 'filter',
                                tpe: ExpressionsParser.FIELD
                            }, {
                                ctx: ExpressionsParser.RULE_methodCall,
                                children: [{
                                    value: 'array',
                                    tpe: ExpressionsParser.FIELD
                                }, {
                                    ctx: ExpressionsParser.RULE_methodArgs,
                                    children: [{
                                        value: 'c',
                                        tpe: ExpressionsParser.STRING
                                    },{
                                        value: 'd',
                                        tpe: ExpressionsParser.STRING
                                    }]
                                }]
                            }, {
                                ctx: ExpressionsParser.RULE_path,
                                children: [{
                                    value: 'field',
                                    tpe: ExpressionsParser.FIELD
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        } as ExpressionNode);
    });

    test('with pipe and path', () => {
        const res = toAST(parseInput('(a.b | withName:"xxx").size'));
        expect(res).toEqual({
            ctx: ExpressionsParser.RULE_path,
            children: [{
                ctx: ExpressionsParser.RULE_path,
                children: [{
                    value: 'a',
                    tpe: ExpressionsParser.FIELD
                }, {
                    value: 'b',
                    tpe: ExpressionsParser.FIELD
                }, {
                    ctx: ExpressionsParser.RULE_pipe,
                    children: [{
                        value: 'withName',
                        tpe: ExpressionsParser.FIELD
                    }, {
                        value: 'xxx',
                        tpe: ExpressionsParser.STRING
                    }]
                }]
            }, {
                ctx: ExpressionsParser.RULE_path,
                children: [{
                    value: 'size',
                    tpe: ExpressionsParser.FIELD
                }]
            }]
        } as ExpressionNode);
    });

});

import {apply, parseInput, toAST} from '../src';
import {Collection, identity} from 'scats';

describe('apply', () => {

    test('operations', () => {
        expect(apply(toAST(parseInput('1 + 1')), {})).toEqual(2);
        expect(apply(toAST(parseInput('2 + 2 * 2')), {})).toEqual(6);
        expect(apply(toAST(parseInput('(2 + 2) * 2')), {})).toEqual(8);
        expect(apply(toAST(parseInput('a + 2')), { a: 2 })).toEqual(4);
    });

    test('logical operators', () => {
        const ctx = {
            a: 1,
            b: 1,
            c: 1
        };
        expect(apply(toAST(parseInput('a == 1 && (b == 1 || c == 1)')), ctx)).toEqual(true);
        expect(apply(toAST(parseInput('(a == 1) && ((b == 1) || (c == 1))')), ctx)).toEqual(true);
        expect(apply(toAST(parseInput('a == 2 && ((b == 1) || (c == 1))')), ctx)).toEqual(false);
        expect(apply(toAST(parseInput('a == 1 && ((b == 1) || (c == 2))')), ctx)).toEqual(true);
        expect(apply(toAST(parseInput('a == 1 && ((b == 2) || (c == 1))')), ctx)).toEqual(true);
        expect(apply(toAST(parseInput('a == 1 && (b == 2 || c == 2)')), ctx)).toEqual(false);
        expect(apply(toAST(parseInput('a == 1 && ((b == 2) || (c == 2))')), ctx)).toEqual(false);
    });

    test('property access', () => {
        expect(apply(toAST(parseInput('col.size > 0')), {
            col: {
                size: 1
            }
        })).toEqual(true);

        expect(apply(toAST(parseInput('col.size > 0')), {
            col: Collection.of(1)
        })).toEqual(true);
    });

    test('property index', () => {
        expect(apply(toAST(parseInput('arr[1]')), {
            arr: [1, 2, 3]
        })).toEqual(2);

        expect(apply(toAST(parseInput('obj["some property"]')), {
            obj: {
                'some property': 'value'
            }
        })).toEqual('value');
        expect(apply(toAST(parseInput('obj["some property"]')), {
            obj: {}
        })).toBeUndefined();
        expect(apply(toAST(parseInput('obj.foo["some property"]')), {
            obj: {}
        }, { undefinedFields: 'return-undefined' })).toBeUndefined();

    });

    test('method', () => {
        expect(apply(toAST(parseInput('col.num() > 0')), {
            col: {
                num: () => 1
            }
        })).toEqual(true);
        expect(apply(toAST(parseInput('sum(1, 2) == 3')), {
            sum: (a, b) => a + b
        })).toEqual(true);
    });

    test('pipe (no args)', () => {
        expect(apply(toAST(parseInput('col | size')), {
            col: Collection.of(1, 2)
        }, {
            pipes: {
                size: (col: Collection<any>) => col.size
            }
        })).toEqual(2);
    });

    test('pipe (with args)', () => {
        expect(apply(toAST(parseInput('col | min:2 | size')), {
            col: Collection.of(0, 1, 2, 3, 4)
        }, {
            pipes: {
                min: (col: Collection<number>, min: number) => col.filter(x => x >= min),
                size: (col: Collection<any>) => col.size
            }
        })).toEqual(3);
    });

    test('method with pipe (with args)', () => {
        expect(apply(toAST(parseInput('max(col | le:2)')), {
            col: Collection.of(0, 1, 5, 7, 4),
            max: (col: Collection<number>) => col.maxBy(identity)
        }, {
            pipes: {
                le: (col: Collection<number>, min: number) => col.filter(x => x <= min),
                size: (col: Collection<any>) => col.size
            }
        })).toEqual(1);
    });

    test('method with pipe with method call as pipe arg', () => {
        expect(apply(toAST(parseInput('max( images | filter:"category":collection("A", "B") | map:"score")')), {
            images: Collection.of({
                category: 'A',
                score: 0.8
            }, {
                category: 'B',
                score: 0.9
            }, {
                category: 'C',
                score: 0.99
            }),
        }, {
            functions: {
                collection: (...args) => Collection.of(...args),
                max: (col: Collection<number>) => col.maxBy(identity)
            },
            pipes: {
                filter: (col: Collection<number>, field: string, value: Collection<string>) => {
                    return col.filter(x =>
                        value.contains(x[field])
                    );
                },
                map: (col: Collection<number>, field: string) => col.map(x => x[field]),
                size: (col: Collection<any>) => col.size
            }
        })).toEqual(0.9);
    });

    test('method with pipe with field as pipe arg', () => {
        expect(apply(toAST(parseInput('max(images | filter:"category":ab | map:"score")')), {
            ab: Collection.of('A', 'B'),
            images: Collection.of({
                category: 'A',
                score: 0.8
            }, {
                category: 'B',
                score: 0.9
            }, {
                category: 'C',
                score: 0.99
            }),
        }, {
            functions: {
                collection: (...args) => Collection.of(...args),
                max: (col: Collection<number>) => col.maxBy(identity)
            },
            pipes: {
                filter: (col: Collection<number>, field: string, value: Collection<string>) => {
                    return col.filter(x =>
                        value.contains(x[field])
                    );
                },
                map: (col: Collection<number>, field: string) => col.map(x => x[field]),
                size: (col: Collection<any>) => col.size
            }
        })).toEqual(0.9);
    });
    test('method with pipe with another pipe as pipe arg', () => {
        expect(apply(toAST(parseInput('images | filter:"score":"gte":(images | map:"score" | avg) | size')), {
            images: Collection.of({
                category: 'A',
                score: 0.8
            }, {
                category: 'B',
                score: 0.9
            }, {
                category: 'C',
                score: 1
            }),
        }, {
            functions: {
                collection: (...args) => Collection.of(...args),
                max: (col: Collection<number>) => col.maxBy(identity)
            },
            pipes: {
                filter: (col: Collection<number>, field: string, op: string, value: number) => {
                    return col.filter(x => {
                        if (op === 'gte') {
                            return x[field] >= value;
                        } else {
                            return false;
                        }
                    });
                },
                map: (col: Collection<number>, field: string) => col.map(x => x[field]),
                avg: (col: Collection<number>) => col.nonEmpty ? col.sum(identity) / col.size : 0,
                size: (col: Collection<any>) => col.size
            }
        })).toEqual(2);
    });

    test('silently process undefined', () => {

        expect(apply(toAST(parseInput('images.size > 0')), {}, {
            undefinedFields: 'return-undefined'
        })).toBeFalsy();
        expect(() => apply(toAST(parseInput('images.size > 0')), {}, {
            undefinedFields: 'throw-error'
        })).toThrowError();

        expect(apply(toAST(parseInput('images.sum() > 0')), {}, {
            undefinedFields: 'return-undefined'
        })).toBeFalsy();
        expect(() => apply(toAST(parseInput('images.sum() > 0')), {}, {
            undefinedFields: 'throw-error'
        })).toThrowError();

        expect(apply(toAST(parseInput('images.sum(1, 2) > 0')), {}, {
            undefinedFields: 'return-undefined'
        })).toBeFalsy();
        expect(() => apply(toAST(parseInput('images.sum(1, 2) > 0')), {}, {
            undefinedFields: 'throw-error'
        })).toThrowError();

        expect(apply(toAST(parseInput('images[0] > 0')), {}, {
            undefinedFields: 'return-undefined'
        })).toBeFalsy();
        expect(() => apply(toAST(parseInput('images[0] > 0')), {}, {
            undefinedFields: 'throw-error'
        })).toThrowError();

    });


    test('or operator with method call', () => {
        const ctx1 = {
            form: {
                field: "Allow all"
            }
        };
        const ctx2 = {
            form: {
                field: "Nothing"
            }
        };

        expect(apply(toAST(parseInput('form.field == "Allow all" || form.field.includes("Movie")')), ctx1)).toBeTruthy();
        expect(apply(toAST(parseInput('form.field == "Allow all" || form.field.includes("Movie")')), ctx2)).toBeFalsy();
        expect(apply(toAST(parseInput('form.field == "Allow all" || form.field.includes("Nothing")')), ctx2)).toBeTruthy();
        expect(apply(toAST(parseInput('form.field == "Allow all" || form.field.includes("Nothing")')), {}, {
            undefinedFields: 'return-undefined'
        })).toBeFalsy();

    });

    test('boolean operators', () => {
        expect(apply(toAST(parseInput('1 < 2 && 3 < 4')), {})).toBeTruthy();
        expect(apply(toAST(parseInput('1 > 2 && 3 < 4')), {})).toBeFalsy();
        expect(apply(toAST(parseInput('1 < 2 && a < 4')), {}, {
            undefinedFields: 'return-undefined'
        })).toBeFalsy();

        expect(apply(toAST(parseInput('1 < 2 || 3 < 4')), {})).toBeTruthy();
        expect(apply(toAST(parseInput('1 > 2 || 3 < 4')), {})).toBeTruthy();
        expect(apply(toAST(parseInput('1 > 2 || 3 > 4')), {})).toBeFalsy();
        expect(apply(toAST(parseInput('1 < 2 || a < 4')), {}, {
            undefinedFields: 'return-undefined'
        })).toBeTruthy();
    });

    test('equal operators', () => {
        expect(apply(toAST(parseInput('1 == 1')), {})).toBeTruthy();
        expect(apply(toAST(parseInput('1 != 1')), {})).toBeFalsy();
        expect(apply(toAST(parseInput('1 == 2')), {})).toBeFalsy();
        expect(apply(toAST(parseInput('1 != 2')), {})).toBeTruthy();

        expect(apply(toAST(parseInput('"aa" == "aa"')), {})).toBeTruthy();
        expect(apply(toAST(parseInput('"aa" != "aa"')), {})).toBeFalsy();
        expect(apply(toAST(parseInput('"ab" == "ac"')), {})).toBeFalsy();
        expect(apply(toAST(parseInput('"ab" != "ac"')), {})).toBeTruthy();
    });

    test('injection', () => {
        let x = 0;

        // we inject function into string object and try to invoke it
        String.prototype['hack'] = () => {
            x = 1;
        };
        apply(toAST(parseInput('"".toString.constructor(foo1.hack())')), {
            foo1: ''
        }, {
            allowConstructorAccess: true
        });
        expect(x).toEqual(1);

        x = 0;
        apply(toAST(parseInput('"".toString.constructor(foo1.hack())')), {
            foo1: ''
        }, {
            allowConstructorAccess: false,
            undefinedFields: 'return-undefined'
        });
        expect(x).toEqual(0);

        expect(() => apply(toAST(parseInput('"".toString.constructor(foo1.hack())')), {
            foo1: ''
        }, {
            allowConstructorAccess: false
        })).toThrowError();

        expect(() => apply(toAST(parseInput('"".toString[\'constructor\'](foo1.hack())')), {
            foo1: ''
        }, {
            allowConstructorAccess: false
        })).toThrowError();
    });

});

# expressions-parser

`expressions-parser` allows you to parse expression from string and evaluate it.

Install:
```
npm i expressions-parser
```

How to use:
```typescript
import {toAST, parseInput, apply} from 'expression-parser';

const ast = toAST(parseInput('1 + 1'));
apply(ast, {}); // return 2
```


# Expressions syntax
Allowed are:
* numbers: `1`, `100500`, `-1`
* strings (both single and double quoted): `'test string'`, `"another string"`
* boolean: `false`, `true`
* object field access: `obj.field`
* indexed access: `field[0]`, `field['property']`, `field[propVariable]`
* method call: `obj.method()`, `obj.method(arg1, 'arg2', 0)`


## Pipes
You can use pipes the same way as in angular:

```typescript
import {toAST, parseInput, apply} from 'expression-parser';
const ast = toAST(parseInput('obj.numbers | min:10 | sum'));
const sum = apply(ast, {
    obj: {
        numbers: [1, 2, 11, 19, 15]
    }
}, {
    pipes: {
        min: (arr: number[], min: number) => arr.filter(x => x >= min),
        sum: (arr: number[]) => arr.reduce((a, b) => a + b, 0)
    }
}); // returns 45
```


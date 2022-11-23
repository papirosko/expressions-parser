import {parseInput} from '../src';
import {TerminalNode} from 'antlr4ts/tree/TerminalNode';
import {ExpressionsParser} from '../src/generated/ExpressionsParser';

describe('parse', () => {

    test('parseInput works', () => {
        expect(() => parseInput('1+1')).not.toThrow();
    });

    test('parseInput returns correct results', () => {
        const res = parseInput('1+1');
        const child = res.getChild(0).getChild(0).getChild(0) as TerminalNode;
        expect(child.symbol.type).toEqual(ExpressionsParser.NUMBER);
    });

});

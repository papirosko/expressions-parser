import {ExpressionContext, ExpressionsParser} from './generated/ExpressionsParser';
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {ExpressionsLexer} from './generated/ExpressionsLexer';

export function parseInput(input: string): ExpressionContext {
    // Create the lexer and parser

    const inputStream = CharStreams.fromString(input);
    const lexer = new ExpressionsLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ExpressionsParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
    return parser.start().expression();

}

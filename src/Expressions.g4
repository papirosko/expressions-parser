grammar Expressions;

start: expression;

value: NUMBER | STRING | BOOL;
indexedField: FIELD '[' (path | NUMBER | STRING) ']';
path: (FIELD | indexedField | methodCall) ('.' (FIELD | indexedField | methodCall))*;
methodArg: (pipe | path | STRING | NUMBER);
methodArgs: methodArg (',' methodArg)*;
methodCall: FIELD '(' methodArgs? ')';
pipeName: FIELD;
pipeArg: ':' (value | methodCall | path);
pipe: path ('|' pipeName pipeArg*)+;

expression: '(' expression ')'
            | expression '.' path
            | expression OPERATOR2 expression
            | expression OPERATOR1 expression
            | expression OPERATOR3 expression
            | pipe
            | path
            | value
            ;

WS: [ \t\u000C\r\n]+ -> skip;
OPERATOR1: '>=' | '<=' | [><+-];
OPERATOR2: [*/];
OPERATOR3: '&&' | '||' | '==' || '!=';
BOOL: 'true' | 'false';
STRING: ('"' ~('"')* '"') | ('\'' ~('\'')* '\'');
NUMBER: '-'? [0-9]+ ('.'? [0-9]+)?;
FIELD: '-'? [a-zA-Z_][a-zA-Z0-9_]*;


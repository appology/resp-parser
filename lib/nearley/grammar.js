"use strict";

// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
    function id(x) {
        return x[0];
    }
    var grammar = {
        Lexer: undefined,
        ParserRules: [{ "name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": function postprocess(d) {
                return parseInt(d[0].join(""));
            }
        }, { "name": "int$ebnf$1$subexpression$1", "symbols": [{ "literal": "-" }] }, { "name": "int$ebnf$1$subexpression$1", "symbols": [{ "literal": "+" }] }, { "name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id }, { "name": "int$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "int$ebnf$2", "symbols": [/[0-9]/] }, { "name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": function postprocess(d) {
                if (d[0]) {
                    return parseInt(d[0][0] + d[1].join(""));
                } else {
                    return parseInt(d[1].join(""));
                }
            }
        }, { "name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{ "literal": "." }, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"] }, { "name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id }, { "name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": function postprocess(d) {
                return parseFloat(d[0].join("") + (d[1] ? "." + d[1][1].join("") : ""));
            }
        }, { "name": "decimal$ebnf$1", "symbols": [{ "literal": "-" }], "postprocess": id }, { "name": "decimal$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "decimal$ebnf$2", "symbols": [/[0-9]/] }, { "name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "decimal$ebnf$3$subexpression$1", "symbols": [{ "literal": "." }, "decimal$ebnf$3$subexpression$1$ebnf$1"] }, { "name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id }, { "name": "decimal$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": function postprocess(d) {
                return parseFloat((d[0] || "") + d[1].join("") + (d[2] ? "." + d[2][1].join("") : ""));
            }
        }, { "name": "percentage", "symbols": ["decimal", { "literal": "%" }], "postprocess": function postprocess(d) {
                return d[0] / 100;
            }
        }, { "name": "jsonfloat$ebnf$1", "symbols": [{ "literal": "-" }], "postprocess": id }, { "name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{ "literal": "." }, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"] }, { "name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id }, { "name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"] }, { "name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id }, { "name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": function postprocess(d) {
                return parseFloat((d[0] || "") + d[1].join("") + (d[2] ? "." + d[2][1].join("") : "") + (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : ""));
            }
        }, { "name": "Main$subexpression$1$ebnf$1", "symbols": ["Expr"] }, { "name": "Main$subexpression$1$ebnf$1", "symbols": ["Main$subexpression$1$ebnf$1", "Expr"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "Main$subexpression$1", "symbols": ["Main$subexpression$1$ebnf$1"] }, { "name": "Main$subexpression$1", "symbols": ["SimpleString"] }, { "name": "Main$subexpression$1", "symbols": ["Error"] }, { "name": "Main", "symbols": ["Main$subexpression$1"], "postprocess": function postprocess(d) {
                return d[0][0];
            }
        }, { "name": "Expr$subexpression$1", "symbols": ["Array"] }, { "name": "Expr$subexpression$1", "symbols": ["NullArray"] }, { "name": "Expr$subexpression$1", "symbols": ["BulkString"] }, { "name": "Expr$subexpression$1", "symbols": ["NullBulkString"] }, { "name": "Expr$subexpression$1", "symbols": ["Integer"] }, { "name": "Expr", "symbols": ["Expr$subexpression$1"], "postprocess": function postprocess(d) {
                return d[0][0];
            }
        }, { "name": "Array$ebnf$1", "symbols": [] }, { "name": "Array$ebnf$1", "symbols": ["Array$ebnf$1", "Expr"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "Array", "symbols": [{ "literal": "*" }, "int", "CRLF", "Array$ebnf$1"], "postprocess": function postprocess(d) {
                var length = parseInt(d[1]);
                var value = d[3];
                if (value && value.length != length) {
                    return;
                }

                if (value && value.filter(function (i) {
                    return !i;
                }).length > 0) {
                    return;
                }

                return {
                    type: 'Array',
                    length: length,
                    value: value
                };
            }
        }, { "name": "NullArray$string$1", "symbols": [{ "literal": "*" }, { "literal": "-" }, { "literal": "1" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "NullArray", "symbols": ["NullArray$string$1", "CRLF"], "postprocess": function postprocess(d) {
                return {
                    type: 'NullArray'
                };
            }
        }, { "name": "BulkString$ebnf$1", "symbols": [] }, { "name": "BulkString$ebnf$1", "symbols": ["BulkString$ebnf$1", /./], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "BulkString", "symbols": [{ "literal": "$" }, "int", "CRLF", "BulkString$ebnf$1", "CRLF"], "postprocess": function postprocess(d) {
                var length = parseInt(d[1]);
                var value = d[3].join("");
                if (value && value.length != length) {
                    return;
                }
                return {
                    type: 'BulkString',
                    length: length,
                    value: value
                };
            }
        }, { "name": "NullBulkString$string$1", "symbols": [{ "literal": "-" }, { "literal": "1" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "NullBulkString", "symbols": ["NullBulkString$string$1", "CRLF"], "postprocess": function postprocess(d) {
                return {
                    type: 'NullBulkString'
                };
            }
        }, { "name": "SimpleString$ebnf$1", "symbols": [] }, { "name": "SimpleString$ebnf$1", "symbols": ["SimpleString$ebnf$1", /./], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "SimpleString", "symbols": [/[\+]/, "SimpleString$ebnf$1", "CRLF"], "postprocess": function postprocess(d) {
                var value = d[1].join("");
                return {
                    type: 'SimpleString',
                    value: value
                };
            }
        }, { "name": "Error$ebnf$1", "symbols": [/[^ ]/] }, { "name": "Error$ebnf$1", "symbols": ["Error$ebnf$1", /[^ ]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "Error$ebnf$2", "symbols": [] }, { "name": "Error$ebnf$2", "symbols": ["Error$ebnf$2", /./], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "Error", "symbols": [{ "literal": "-" }, "Error$ebnf$1", /[ ]/, "Error$ebnf$2", "CRLF"], "postprocess": function postprocess(d) {
                var errorPrefix = d[1].join("");
                var message = d[3].join("");
                return {
                    type: 'Error',
                    errorPrefix: errorPrefix,
                    message: message
                };
            }
        }, { "name": "Integer", "symbols": [{ "literal": ":" }, "int", "CRLF"], "postprocess": function postprocess(d) {
                var value = d[1];
                return {
                    type: 'Integer',
                    value: value
                };
            }
        }, { "name": "CRLF", "symbols": [/[\r]/, /[\n]/] }],
        ParserStart: "Main"
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = grammar;
    } else {
        window.grammar = grammar;
    }
})();
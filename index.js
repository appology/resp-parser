const nearley = require('nearley');
const grammar = require('./build/grammar');

const Parser = function () {
    var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    return {
        feed: function (f) { parser.feed(f) },
        parse: function () { 
            return parser.results && parser.results.filter(function(i){return !!i});
        }
    }
};

module.exports = Parser;
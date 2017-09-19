'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nearley = require('nearley');

var _nearley2 = _interopRequireDefault(_nearley);

var _grammar = require('./nearley/grammar');

var _grammar2 = _interopRequireDefault(_grammar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
  function Parser() {
    _classCallCheck(this, Parser);

    this._parser = new _nearley2.default.Parser(_nearley2.default.Grammar.fromCompiled(_grammar2.default));
  }

  _createClass(Parser, [{
    key: 'feed',
    value: function feed(chunk) {
      return this._parser.feed(chunk);
    }
  }, {
    key: 'results',
    get: function get() {
      var results = this._parser.results;
      return results && results.filter(function (i) {
        return !!i;
      });
    }
  }]);

  return Parser;
}();

exports.default = Parser;
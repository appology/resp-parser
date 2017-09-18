import nearley from 'nearley'
import grammar from './nearley/grammar'

class Parser {
  constructor(){
    this._parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  }

  feed(chunk) {
    return this._parser.feed(chunk)
  }

  get results() {
    return this._parser.results && this._parser.results.filter(function(i){return !!i})
  }
}

export default Parser
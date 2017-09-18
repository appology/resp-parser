import nearley from 'nearley'
import grammar from './nearley/grammar'

class Parser {
  constructor() {
    this._parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  }

  feed(chunk) {
    return this._parser.feed(chunk)
  }

  get results() {
    var results = this._parser.results
    return results && results.filter(i => !!i)
  }
}

export default Parser
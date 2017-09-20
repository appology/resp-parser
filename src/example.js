import prettyjson from 'prettyjson'
import Parser from './parser'

var parser = new Parser()
parser.feed('*2\r\n*2\r\n:1\r\n$7\r\ntesting\r\n$7\r\ntesting\r\n')
var value = parser.results
//console.log(JSON.stringify(value))
console.log(prettyjson.render(value))
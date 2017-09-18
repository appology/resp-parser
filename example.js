var RespParser = require('./lib');

var parser = new RespParser();
parser.feed('*2\r\n*2\r\n:1\r\n$7\r\ntesting\r\n$7\r\ntesting\r\n');

console.log(JSON.stringify(parser.results));
import test from 'ava'
import RespParser from '../src'

test('bulk-string', t => {
  var parser = new RespParser()
  parser.feed('$7\r\ntesting\r\n')
  var value = parser.results;
  var expected = {"type":"BulkString","length":7,"value":"testing"}
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})
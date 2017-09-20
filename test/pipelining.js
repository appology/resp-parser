import test from 'ava'
import RespParser from '../src'

test('pipelining', t => {
  var parser = new RespParser()
  parser.feed('$4\r\nPING\r\n$4\r\nPING\r\n$4\r\nPING\r\n')
  var value = parser.results
  var expected = [{"type":"BulkString","length":4,"value":"PING"},{"type":"BulkString","length":4,"value":"PING"},{"type":"BulkString","length":4,"value":"PING"}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})
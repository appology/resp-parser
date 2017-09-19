import test from 'ava'
import RespParser from '../src'

test('empty-array', t => {
  var parser = new RespParser()
  parser.feed('*0\r\n')
  var value = parser.results
  var expected = [{"type":"Array","length":0,"value":[]}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})

test('integer-array', t => {
  var parser = new RespParser()
  parser.feed('*2\r\n:0\r\n:1\r\n')
  var value = parser.results
  var expected = [{"type":"Array","length":2,"value":[{"type":"Integer","value":0},{"type":"Integer","value":1}]}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})

test('bulk-string-array', t => {
  var parser = new RespParser()
  parser.feed('*2\r\n$5\r\nItem0\r\n$5\r\nItem1\r\n')
  var value = parser.results
  var expected = [{"type":"Array","length":2,"value":[{"type":"BulkString","length":5,"value":"Item0"},{"type":"BulkString","length":5,"value":"Item1"}]}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})

test('multi-typed-array', t => {
  var parser = new RespParser()
  parser.feed('*2\r\n:0\r\n$5\r\nItem1\r\n')
  var value = parser.results
  var expected = [{"type":"Array","length":2,"value":[{"type":"Integer","value":0},{"type":"BulkString","length":5,"value":"Item1"}]}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})

test('multi-typed-array-split-feedings', t => {
  var parser = new RespParser()
  parser.feed('*2\r\n:0\r\n$')
  parser.feed('5\r\nItem1\r\n')
  var value = parser.results
  var expected = [{"type":"Array","length":2,"value":[{"type":"Integer","value":0},{"type":"BulkString","length":5,"value":"Item1"}]}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})

test('nested-array', t => {
  var parser = new RespParser()
  parser.feed('*2\r\n*2\r\n:0\r\n:1\r\n*2\r\n:2\r\n:3\r\n')
  var value = parser.results
  var expected = [{"type":"Array","length":2,"value":[{"type":"Array","length":2,"value":[{"type":"Integer","value":0},{"type":"Integer","value":1}]},{"type":"Array","length":2,"value":[{"type":"Integer","value":2},{"type":"Integer","value":3}]}]}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})
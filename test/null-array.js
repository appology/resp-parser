import test from 'ava'
import RespParser from '../src'

test('null-array', t => {
  var parser = new RespParser()
  parser.feed('*-1\r\n')
  var value = parser.results
  var expected = {"type":"NullArray"}
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})
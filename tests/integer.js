import test from 'ava'
import RespParser from '../bin/lib'

test('integer', t => {
  var parser = new RespParser()
  parser.feed(':546\r\n')
  var value = parser.results
  var expected = [{"type":"Integer","value":546}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})
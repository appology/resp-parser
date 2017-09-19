import test from 'ava'
import RespParser from '../src'

test('simple-string', t => {
  var parser = new RespParser()
  parser.feed('+OK\r\n')
  var value = parser.results
  var expected = [{"type":"SimpleString","value":"OK"}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})

test('simple-string-and-integer', t => {
  var parser = new RespParser()
  try {
    parser.feed('+OK\r\n:1\r\n')
    t.fail("SimpleString type cannot be mixed with other types.")
  } catch (err) {
    t.pass()
  }
})
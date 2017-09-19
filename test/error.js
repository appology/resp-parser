import test from 'ava'
import RespParser from '../src'

test('error', t => {
  var parser = new RespParser()
  parser.feed('-ERR An error occurred\r\n')
  var value = parser.results
  var expected = [{"type":"Error","errorPrefix":"ERR","message":"An error occurred"}]
  t.deepEqual(value, expected, 'Parsed value does not match expected result')
})

test('error-and-integer', t => {
  var parser = new RespParser()
  try {
    parser.feed('-ERR An error occurred\r\n:1\r\n')
    t.fail("Error type cannot be mixed with other types.")
  } catch (err) {
    t.pass()
  }
})
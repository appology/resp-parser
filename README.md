# resp-parser
A grammar and parser for the RESP protocol.

This example code:
```javascript
var RespParser = require('resp-parser');
var parser = new RespParser();
parser.feed('*2\r\n*2\r\n:1\r\n$7\r\ntesting\r\n$7\r\ntesting\r\n');

console.log(JSON.stringify(parser.parse()));
```

Results in the following output:
```json
[{
    "type": "Array",
    "length": 2,
    "value": [{
        "type": "Array",
        "length": 2,
        "value": [{
            "type": "Int",
            "value": 1
        }, {
            "type": "String",
            "length": 7,
            "value": "testing"
        }]
    }, {
        "type": "String",
        "length": 7,
        "value": "testing"
    }]
}]
```

**Currently supports:**
- Integers
- Bulk Strings
- Arrays (including nested arrays)

**Coming soon:**
- Simple Strings
- Errors
- Null Values

RESP Protocol documentation can be found at:
[https://redis.io/topics/protocol](https://redis.io/topics/protocol)

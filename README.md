# appology / resp-parser [![Build Status](https://travis-ci.org/appology/resp-parser.svg?branch=master)](https://travis-ci.org/appology/resp-parser)

A grammar and stream-friendly parser for the RESP protocol.

Crafted with ♡ by Appology

Made possible by the *super awesome* [nearley](https://nearley.js.org/) parser toolkit.

## Before you install...
Please keep in mind that this project is not yet battle tested.

## Issues?
You can submit new issues using [GitHub Issues](https://github.com/appology/resp-parser/issues)

## Install:
```bash
npm i resp-parser --save
```

## What does it do?
Parses RESP into an Abstract Syntax Tree (AST) for further processing.

### This example code:
```javascript
var RespParser = require('resp-parser')

var parser = new RespParser()
// optional: call feed more than once if needed
parser.feed('*2\r\n*2\r\n:1\r\n$7\r\ntesting\r\n$7\r\ntesting\r\n')

console.log(JSON.stringify(parser.results))
```

### Results in the following output:
```json
{
    "type": "Array",
    "length": 2,
    "value": [{
        "type": "Array",
        "length": 2,
        "value": [{
            "type": "Integer",
            "value": 1
        }, {
            "type": "BulkString",
            "length": 7,
            "value": "testing"
        }]
    }, {
        "type": "BulkString",
        "length": 7,
        "value": "testing"
    }]
}
```

## Included:
- **Support for the following types:**
  - Integers
  - Simple Strings
  - Bulk Strings
  - Null Bulk Strings
  - Arrays (including nested arrays)
  - Null Arrays
  - Errors
  - Pipelines
- Unit Tests

## Coming soon:
  - Tools for dealing with ASTs from this parser

*Check out the [release notes](RELEASE-NOTES.md).*

RESP Protocol documentation can be found at:
[https://redis.io/topics/protocol](https://redis.io/topics/protocol)

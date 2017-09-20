# RESP grammar for Nearley (https://nearley.js.org/)
# Created with ♡ by Appology

@builtin "number.ne"

Main -> (Anything:+ | SimpleString | Error) {%
  function(d) {
    var value = d[0][0]
    if(Array.isArray(value) && value.length == 1){
      value = value[0];
    }
    return value
  }
%}

Array -> "*" int CRLF (AnyArray:* | AnyPrimitive:*) {%
  function(d,l,reject) {
    var length = parseInt(d[1])
    var value = d[3][0]

    if(value && value.length != length)
    {
      return reject
    }

    return {
      type: 'Array',
      length,
      value
    }
  }
%}

NullArray -> "*-1" CRLF {%
  function(d) {
    return {
      type: 'NullArray'
    }
  }
%}

AnyArray -> (Array | NullArray) {%
  function(d) {
    var value = d[0][0]
    return value
  }
%}

BulkString -> "$" int CRLF .:* CRLF {%
  function(d,l,reject) {
    var length = parseInt(d[1])
    var value = d[3].join("")
    if(value && value.length != length) {
      return reject
    }
    return {
      type: 'BulkString',
      length,
      value
    }
  }
%}

NullBulkString -> "-1" CRLF {%
  function(d) {
    return {
      type: 'NullBulkString'
    }
  }
%}

Integer -> ":" int CRLF {%
  function(d) {
    var value = d[1]
    return {
      type: 'Integer',
      value
    };
  }
%}

AnyPrimitive -> (BulkString | NullBulkString | Integer) {%
  function(d) {
    var value = d[0][0]
    return value
  }
%}

Anything -> (AnyArray | AnyPrimitive) {%
  function(d) {
    var value = d[0][0]
    return value
  }
%}

SimpleString -> [\+] .:* CRLF {%
  function(d) {
    var value = d[1].join("")
    return {
      type: 'SimpleString',
      value
    }
  }
%}

Error -> "-" [^ ]:+ [ ] .:* CRLF {%
  function(d) {
    var errorPrefix = d[1].join("")
    var message = d[3].join("")
    return {
      type: 'Error',
      errorPrefix,
      message
    }
  }
%}

CRLF -> [\r] [\n]
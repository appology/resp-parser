# RESP grammar for Nearley (https://nearley.js.org/)
# Created with ♡ by Appology

@builtin "number.ne"

Main -> (Expr:+ | SimpleString | Error) {%
  function(d) {
    return d[0][0]
  }
%}

Expr -> (Array | NullArray | BulkString | NullBulkString | Integer) {%
  function(d) {
    return d[0][0]
  }
%}

Array -> "*" int CRLF Expr:* {%
  function(d) {
    var length = parseInt(d[1])
    var value = d[3]
    if(value && value.length != length) {
      return
    }

    if(value && value.filter(i => !i).length > 0) {
      return
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

BulkString -> "$" int CRLF .:* CRLF {%
  function(d) {
    var length = parseInt(d[1])
    var value = d[3].join("")
    if(value && value.length != length) {
      return
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

Integer -> ":" int CRLF {%
  function(d) {
    var value = d[1]
    return {
      type: 'Integer',
      value
    };
  }
%}

CRLF -> [\r] [\n]
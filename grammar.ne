# RESP grammar for Nearley
# Created with ♡ by Appology

@builtin "number.ne"

Main -> Expr {%
    function(d) {
        return d[0];
    }
%}

Expr -> (Array | BulkString | Integer) {%
    function(d) {
        return d[0][0];
    }
%}

Array -> "*" int Delim Expr:+ {%
    function(d) {
		var length = parseInt(d[1]);
		var value = d[3];
		if(value && value.length != length)
		{
			return;
		}
        return {
			type: 'Array',
			length: parseInt(d[1]),
			value: d[3]
		};
    }
%}

BulkString -> "$" int Delim .:* Delim {%
    function(d) {
		var length = parseInt(d[1]);
		var value = d[3].join("");
		if(value && value.length != length)
		{
			return;
		}
		return {
			type: 'BulkString',
			length: parseInt(d[1]),
			value
		};
    }
%}

Integer -> ":" int Delim {%
    function(d) {
        return {
			type: 'Integer',
			value: parseInt(d[1])
		};
    }
%}

Delim -> [\r] [\n]
# RESP grammar for Nearley
# Created with ♡ by Appology

@builtin "number.ne"

Main -> Expr {%
    function(d) {
        return d[0];
    }
%}

Expr -> (Array | String | Int) {%
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

String -> "$" int Delim .:* Delim {%
    function(d) {
		var length = parseInt(d[1]);
		var value = d[3].join("");
		if(value && value.length != length)
		{
			return;
		}
		return {
			type: 'String',
			length: parseInt(d[1]),
			value
		};
    }
%}

Int -> ":" int Delim {%
    function(d) {
        return {
			type: 'Int',
			value: parseInt(d[1])
		};
    }
%}

Delim -> [\r] [\n]
var shell = require('shelljs')
shell.exec('node node_modules/nearley/bin/nearleyc.js src/nearley/grammar.ne > src/nearley/grammar.js --color=always')
shell.exec('babel src -d lib --color=always')
var shell = require('shelljs')
var path = require('path')

if(shell.exec('node node_modules/nearley/bin/nearleyc.js src/grammar.ne > src/grammar.js --color=always').code != 0) {
  shell.exit(1);
}

if(shell.mkdir('-p', 'lib/nearley').code != 0) {
  shell.exit(1);
}

if(shell.cp('-rf', 'src/grammar.js', 'lib/nearley').code != 0) {
  shell.exit(1);
}
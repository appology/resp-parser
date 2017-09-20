var shell = require('shelljs')

if(shell.exec('node node_modules/nearley/bin/nearleyc.js src/nearley/grammar.ne > src/nearley/grammar.js --color=always').code != 0) {
  shell.exit(1);
}

if(shell.cp('-rf', 'src/nearley/grammar.js', 'lib/nearley').code != 0) {
  shell.exit(1);
}
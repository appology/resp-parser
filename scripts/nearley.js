var shell = require('shelljs')
var path = require('path')

const nearleyc_path = path.join(__dirname, 'node_modules/nearley/bin/nearleyc.js')
if(shell.exec('node ' + nearleyc_path + ' src/grammar.ne > src/grammar.js --color=always').code != 0) {
  shell.exit(1);
}

if(shell.mkdir('-p', 'lib/nearley').code != 0) {
  shell.exit(1);
}

if(shell.cp('-rf', 'src/grammar.js', 'lib/nearley').code != 0) {
  shell.exit(1);
}
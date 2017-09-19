var shell = require('shelljs')

if(process.env.CI !== 'true' && shell.exec('npm run build').code != 0){
  shell.echo('Error: Project failed to build.');
  shell.exit(1);
}

if(shell.exec('ava test/**/*.js --color=always').code != 0){
  shell.echo('Error: One or more tests failed.');
  shell.exit(1);
}
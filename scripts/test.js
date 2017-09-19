var shell = require('shelljs')

if(process.env.CI !== 'true' && shell.exec('npm run build --color=always').code != 0){
  shell.exit(1);
}

if(shell.exec('ava test/**/*.js --color=always').code != 0){
  shell.exit(1);
}
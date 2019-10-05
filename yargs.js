const yargs = require('yargs');
const chalk = require('chalk');

console.log(chalk.green('mohit'));

// add -- in front to make it key and than write value in double quotes
// eg --name="mohit"


yargs.command({
  command:'add',
  describe: 'title',
  builder:{
    title:{
      describe:"Note title",
      demandOption: true,
      type: 'string'
    },
    body:{
      describe:"body",
      demandOption:true,
      type:'string'
    }
  },
  handler: function(argv){
    console.log('Tile:',argv.title);
    console.log('body:',argv.body);
  }
})
yargs.command({
  command:'remove',
  describe: 'title',
  handler: function(){
    console.log('you have entered in command');
  }
})

yargs.command({
  command:'list',
  describe: 'title',
  handler: function(){
    console.log('you have entered in command');
  }
})

yargs.command({
  command:'comment',
  describe: 'title',
  handler: function(){
    console.log('you have entered in command');
  }
})



console.log(yargs.argv);

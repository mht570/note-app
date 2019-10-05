const chalk=require('chalk')
const ans = require('./notefiles.js')
const yargs = require('yargs')


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
    ans.addNote(argv.title,argv.body)
  }
})

yargs.command({
  command:'remove',
  describe: 'title',
  builder:{
    title:{
      describe:"Note title",
      demandOption: true,
      type: 'string'
    },
    // body:{
    //   describe:"body",
    //   demandOption:true,
    //   type:'string'
    // }
  },
  handler: function(argv){
    ans.removeNotes(argv.title )
  }
})

yargs.command({
  command:'list',

  describe:'list of NOtes',
  handler(){
    ans.listNotes();
  }
})


yargs.command({
  command:'read',
  describe:'reading of NOtes',
  builder:{
    title:{
    describe:"Note title",
    demandOption: true,
    type: 'string'
  }
  },
  handler(argv){
    ans.readNotes(argv.title);
  }
})


console.log(yargs.argv);

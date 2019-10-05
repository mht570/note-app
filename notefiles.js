const fs = require('fs');
const chalk = require('chalk');

const getNote=function(){
  console.log('new book');
}


const addNote=function(title,body){

  const notes=loadNotes()

  const duplicateNotes=notes.filter(function(note){
    return note.title==title
  })

  debugger

  if (duplicateNotes.length==0){

  notes.push({
    title:title,
    body:body
  })
   console.log(chalk.green.bold("New Notes added"));
 }else{
   console.log(chalk.red.bold("Notes title taken"));
 }

  saveNotes(notes);

}



const saveNotes=function(notes) {
  const data=JSON.stringify(notes)
  fs.writeFileSync('notes.json',data)
}



const loadNotes=function(){
  try{
    const databuffer=fs.readFileSync('notes.json').toString()
    return JSON.parse(databuffer)
  } catch(e){
    return []
  }

}


const removeNotes=function(title){
  const notes=loadNotes()
  const notesToKeep=notes.filter(function(note){
    return note.title!=title
  })

  if (notes.length>notesToKeep.length){
      saveNotes(notesToKeep)
      console.log(chalk.green.bold('Notes removed'));
    }
    else {
      console.log(chalk.red.bold('Notes removed'));
    }


}

const listNotes = ()=>{
  console.log(chalk.green.inverse("Your notes"));
const notes=loadNotes()

for(i=0;i<notes.length;i++){
  console.log(notes[i].title);
}

}

const readNotes = (title) => {
const notes=loadNotes()

const match =notes.find( (note) => note.title==title )

if (match){
  console.log(chalk.inverse(match.title));
  console.log(match.body);
}else{
 console.log(chalk.red.inverse('Note not found'));
}

}

module.exports={
  getNote:getNote,
  addNote:addNote,
  removeNotes:removeNotes,
  listNotes:listNotes,
  readNotes:readNotes
}

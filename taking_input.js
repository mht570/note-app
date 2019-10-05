var ch=require('chalk')

var x=process.argv[2] //input  first 2 are verison and path from third the main input is present

console.log(ch.blue(x))

if(x=='mohit'){
  console.log(ch.white('you_have_done_it'))
}else{
  console.log('nopes')
}

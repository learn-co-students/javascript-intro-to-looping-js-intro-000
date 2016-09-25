function forLoop(array) {
for ( i = 0 ; i<25 ; i++){
  if ( i === 1){
  array.push("I am 1 strange loop.")
}
  else  {
    array.push(`I am ${i} strange loop.`)
}
}
return array
}

function whileLoop(n) {

   while (n > 0) {
    console.log (--n)

}
return "done"
}


function doWhileLoop(array){
  do {
   --array
  }
  while (array.length > 0 && maybeTrue()){
   if( array > 0 ) {

  }
  else{
    return "false"  }
}
return array
}

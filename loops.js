var array = []
function forLoop(array){
  for (var i=0; i<25, i++){
    if (i>1){
      array.push(`I am ${i} strange loops.`)
  }
    else{
      array.push(`I am ${i} strange loop.`)
    }
  }
  return array
}

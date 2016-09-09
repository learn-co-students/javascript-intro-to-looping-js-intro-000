
//var strange;

function forLoop(strange){
  for (var i = 0; i < 25; i++) {
    if(i===1)
      strange.push("I am a strange loop.")
    else
      strange.push("I am " + i + " strange loops.")
  }
return strange
}

function whileLoop(num){
  while(num>0)
    console.log(--num)

  return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhile(array){

  do {
    array = array.slice(1)

  } while (array.length>0 && maybeTrue());

  return array
}

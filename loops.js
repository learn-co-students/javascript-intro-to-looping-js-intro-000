

function forLoop(array){
var s = ""
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
       s = `I am ${i} strange loop.`
    }else {
      s = `I am ${i} strange loops.`
    }
    array = [...array, s]
    array
    }

    return array;
  }


function whileLoop(n){
  while (n > 0) {
  console.log(--n)

}
return "done";
}



function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
 do {
   array.pop()
   array
 } while (array.length > 0 && maybeTrue());
 return array;
}

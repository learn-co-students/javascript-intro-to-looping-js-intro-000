
function forLoop(array){
  for (var i=0;i<25;i++){
      if (i===1 ){
        array.push("I am " + i + " strange loop")
      } else {
        array.push("I am " + i+ "strange loop${i=== 0? '': 's'}.")
      }
  }
  return array
}

function whileLoop(n){
  while(n>0)
  {
    n=n-1
  }
return('done')
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array)
{

  {
    array.pop()
  }
  while

      (array.length>0 && maybeTrue())

  return array
  console.log(array.length)
}

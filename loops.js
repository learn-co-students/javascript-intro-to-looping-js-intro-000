function whileLoop(n){

  while (n >0) {
      console.log(n -= 1)
  }
  return 'done'
}

function doWhileLoop(num){
if(num === 0){
  console.log("I run once regardless.")
}
else if(num === 10){
  for (var i = 0; i < 10; i++) {
    console.log("I run once regardless.")
  }
}
}
function forLoop(array){
  for (let i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
}

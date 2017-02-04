function forLoop(array){
  for (let i = 0; i < 25; i++) {
  if(i === 1){
  array.push("I am 1 strange loop.")
}else {
  array.push(`I am ${i} strange loops.`)
}
}
return array
}

function whileLoop(n){
while (n > 0) {
  console.log(--n)
  if(n === 0){
    return "done"
  }

  }
}


function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 1
}
do {
array =  array.slice(1)
} while (maybeTrue())
return array
}

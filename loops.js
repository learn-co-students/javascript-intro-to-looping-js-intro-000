function forLoop(){
  for (let i=0, i < 25, i++) {
    if (i===0) {
      return "I am 1 strange loop"
    }
  else if (i<25 & i>1) {
    return `I am ${i} strange loops`
    }
  }
}  


function whileLoop(){
  let countdown = 100
  while (countdown > 0) {
    console.log (--countdown)
  }
}
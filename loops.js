function forLoop(array){
  for(i=0; i<25; i++){
    if(i===1){
      return "I am 1 strange loop."
    } else {
      return `I am ${i} strange loops.`
    }
  }
}

function whileLoop(n){
  while(n>0){
    console.log(--n)
  } return'done'
}

function doWhileLoop(num){
  num = num + 1;
} do {
  console.log("I run once regardless.")
} while (num < 0)

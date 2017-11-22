function forLoop(arr){
  for(let i = 0; i < 25; i ++){
    if (i === 1){
      arr.push("I am 1 strange loop.")
    }else{
    arr.push(`I am ${i} strange loops.`);
  }
}
return arr;
}

function whileLoop(num){
  let countdown = num;
  while (countdown > 0){
    console.log(countdown)
    countdown = countdown -1;
  }
  return "done";
}






function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
do {
  array.pop();
  return array;
} while (maybeTrue());
}

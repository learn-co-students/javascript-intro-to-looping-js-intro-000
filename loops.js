function forLoop(arr){
  var msg =''
  for (var i = 0; i < 25; i++){
    msg = i === 1 ? "I am 1 strange loop." :  `I am ${i} strange loops.`;
    arr.push(msg);
  }
  return arr;
}

function whileLoop(n){
  while (n >=0  ){
    console.log(n);
    n--;
  }
  return "Done";
}

function maybeTrue(){
  return Math.random() > 0.5;
}
function doWhileLoop(arr) {
  arr.pop();
}.while(arr.length > 0 && maybeTrue());

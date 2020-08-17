function forLoop(array){
  for(var num=0;num<25;num++){
    if(num===1){
      array.push("I am 1 strange loop.");
    }
    else 
    array.push(`I am ${num} strange loops.`);
  }
  return array;
}
function whileLoop(n){
  while(n>0){
    console.log(--n);
  }
  return "done";
}
function doWhileLoop(num){
  var i=0;
  function incrementVariable() {
  i = i + 1;
  return i;
}

do {console.log("I run once regardless.");} 
while (incrementVariable() < num);
}
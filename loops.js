function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i==1){
      array.push("I am 1 stange loop");
    }
    else {
      array.push(`"I am ${i} stange loop"`)
    }
  }
  return array;
  
}

function whileLoop(number) { 
while (number > 0) {
  console.log(--number);
}
return "done";  
}

function doWhileLoop(array) {
  function maybeTrue() {
     return Math.random() >= 0.5
   }
  do {
     array.pop();
   } while (array.length >0 && maybeTrue());
  return array;
 }
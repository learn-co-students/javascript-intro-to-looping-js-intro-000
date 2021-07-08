function forLoop(array) {
  
  for (let i = 0; i < 25; i++) {
    var newStr =`I am ${i} strange loop${i === 0 ? '' : 's'}.`;
    if (i === 1) {
      newStr = "I am 1 strange loop.";
    }
    array.push(newStr); // push the new string to the array 25 times
  }
  return array;  
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n -= 1;
  }
  return "done";
}

function incrementVariable() {
  i = i + 1;
  return i;
}
 
function doWhileLoop(num) {
 i = 0;
 do { console.log('I run once regardless.');
   
} while (incrementVariable() < num)

}
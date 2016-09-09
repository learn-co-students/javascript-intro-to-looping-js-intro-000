function forLoop(array) {
  for (i = 0; i < 25; i++) {
    if(i === 1) {
       array.push("I am 1 strange loop.");
    } else {
      array.push('I am ${i} strange loops.');
    }
  }
  return array;
}
function whileLoop(num) {
  while(num > 0){
    console.log(num);
    num--;
  }
return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr) {
    do {
      arr.shift();
    } while (maybeTrue() && arr.length > 0);
    return arr;
}

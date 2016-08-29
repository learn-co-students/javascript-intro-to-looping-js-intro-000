function forLoop(array){
var string1 = "I am 1 strange loop";
var string2 = "I am ${} strange loops";
  for (var i = 0; i < 25; i++){
      if (i === 1){
        array.push(string1);
      } else {
        array.push(string2)
      }
    }
  return array;
}

function whileLoop(n){
  while (n > 0){
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
return array;
}


function forLoop(array){
  for (var i = 0; i < 26; i++) {
    array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
  }
  return array
}

var n = 10
function whileLoop(n){
  while(n > 0){
    console.log(--n);
  }
  return "done"
}


function doWhileLoop(array){
  var myArray =["ciao", "bye", "hello", "Help"];
  function maybeTrue() {
    return Math.random() <= 4
  };
  do {
    array.pop();
  }
  while (array.length > 0 && maybeTrue());
  return myArray
}

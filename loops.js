
function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if(i==1){
      array.push("I am 1 strange loop.");
      //var text = "I am 1 strange loop."
      //array.shift(text)
    console.log("g's 1 loop:"+ i);
    }else{
      array.push(`I am ${i} strange loops.`);
      console.log(`g's else loop: ${i}`);
    }

  }
  return array
}

function whileLoop(n){
  var i = n
  while(i > 0){
    console.log(i)
    i--
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array
}

function forLoop(array){
  var array = [];

  for(var i = 0; i < 25; i++){
    if(i === 1){
      console.log(array.push("I am ${i} strange loop"));
    }
    else if (i > 1) {
      console.log(array.push("I am ${i} strange loops"));
    }
  }
}

function whileLoop(n){
  while(n > 0){
    console.log(--n);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array){
  do {
    if(array.length != 0){
      array.shift();
    }
  } while (maybeTrue() === true);
}

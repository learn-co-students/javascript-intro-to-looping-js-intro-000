function forLoop(array){

  for (var i = 0; i < 25; i++) {


    if (i < 2 ) {
      array.push("I am " + i + " strange loop.")
    } else {
      array.push("I am " + i + " strange loops.")
    }

  }

  return array

}

var k=0;


function whileLoop(n){

var k = 0

  while (k<n) {
    console.log(n-k);
    k++
  }
  return("done")
}

var  i=0;

function doWhileLoop(num){

  do {
    console.log ("I run once regardless.")
    i++;
  }
  while (i<=num);

}

function forLoop(array){

for (let i = 0; i < 25; i++) {
  if (i===1) {
    array.push("I am 1 strange loop");
  }
  else  {array.push("I am "+ i +" strange loops.");}
  }

 return(array);
}; // close function

function whileLoop(n) {
  while (n > 0 ){
    console.log(n);
    n--;
  }//close while loop
  return("done");
}//close function

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
do {
  array = array.pop;
  return array;
} while (array.length > 0 && maybeTrue());
}//close function

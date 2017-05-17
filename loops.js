
function forLoop(array){
  for (var i = 0; i < 25; i++){
   array.push(`I am ${(i+1)} strange loop${ i===0 ? '' : 's' }.`);
  }
  return(array);
}

function whileLoop(n){
  while(n){
    console.log(n);
    n--;
  }
  return("done");
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  var len = array.length;

  do {
    array.pop();
    len--;
  } while ( len && maybeTrue() )

  return(array);
}

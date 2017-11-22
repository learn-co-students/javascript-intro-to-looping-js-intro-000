const array = [];
function forLoop(array) {
  for ( i = 0; i < 25; i++ ) {
    ( i === 1 ) ? array.push( "I am 1 strange loop" ) : array.push( `I am ${i} strange loops`);
  }
  return array;
}

function whileLoop(num) {
  while( num > 0 ) {
    console.log(num);
    num--;
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
    array.pop();
  }while( array.length > 0 && maybeTrue() );
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}

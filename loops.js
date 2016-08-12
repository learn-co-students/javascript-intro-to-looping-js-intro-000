var array = [];

function forLoop(array) {
  for (let i = 0; i < 25 ; i++){
    return i === 0 ? "I am 1 strange loop." : `I am + ${i} + strange loops.`
  }
};


function whileLoop(n){

}

function doWhile(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    console.log('doo-bee-doo-bee-doo')
  } while (maybeTrue());
array.length > 0 && maybeTrue()
}

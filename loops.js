function forLoop(array){
  for(i = 1; i <= 25; i++){
		array.push('I am ' + i + ' strange loop' + (i<=1 ? "" : "s"));
	}
	return array
}

function whileLoop(n){
  var countdown = n
  while (countdown > 0){
    console.log(--countdown)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhile(array){
  array = []
  do {
    array = array.slice(-1)
    return array
  }
  while(array.length = 0 && maybeTrue());
}

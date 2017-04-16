function forLoop(array){
	for (var i =0; i<25; i++){
		array.push(`I am ${i} strange loop${i == 1 ? '' : 's'}.`)
	}
	return array
}


function whileLoop(n){
	let countdown = n;

	while (countdown > 0) {
  console.log(--countdown)
}
return 'done'
}

function doWhileLoop(array){
	function maybeTrue() {
	  return Math.random() >= 0.5
	}

	do {
		array.pop()
	} while (array.length > 0 && maybeTrue())
	return array
}

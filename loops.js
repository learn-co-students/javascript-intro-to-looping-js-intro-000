function forLoop(array) {
	for (let i = 1; i <= 25; i++) {
		if(i === 1){
			array.push("I am ${i} strange loop.")
		} else {
			array.push("I am ${i} strange loops.")
		}
	}
	return array
}

function whileLoop(n) {
	var i = n
	while(i > 0){
		console.log(--i)
	}
	return'done'
}

function maybeTrue(){
	
}

function doWhileLoop(array) {
	do {
		array.pop()
	} while (array.length > 0)

}
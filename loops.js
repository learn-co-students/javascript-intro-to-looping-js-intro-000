function forLoop (arr) {
	// body...
	for(var i = 0; i < 25; i++){
		if (i == 1) {
			arr.push("I am 1 strange loop.");
		} else{
			arr.push(`I am ${i} strange loops.`);
		}
	}
	return arr;
}

function whileLoop (num) {
	// body...
	while(num > 0){
		console.log(--num);
	}
	return "done";
}

function doWhileLoop (arr) {
	// body...
	function maybeTrue() {
	  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
	}
	do{
		arr.pop();
	}while( arr.length > 0 && maybeTrue())
	return arr;
}
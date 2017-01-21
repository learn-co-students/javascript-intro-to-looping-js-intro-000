list = [];

function forLoop(array) {
	for (var i = 0; i < 25; i++) {
		if ( i === 1) {
			array.push("I am 1 strange loop.");
		} else {
			array.push(`"I am ${i} strange loops."`);
		}
	};
	return(array);
}

forLoop(list);

var whileLoop = function (num) {
	while (num > 0) {
		console.log(--num);
	}
	return("done");
}

whileLoop(10);

var array = [1, 2];
function doWhileLoop(array) {
	function maybeTrue() {
		return Math.random() >= 0.5
	}

do {
	array.length--;
} while (array.length > 0 && maybeTrue());

return(array);
}

doWhileLoop(array);

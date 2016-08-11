//Adds `"I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."` to an array 25 times'
function forLoop(array) {
	// body...
	for (var i = 0; i < 25 ; i++) {
	  if (i === 1) 
	  {
         array.push(`I am 1 strange loop`);
	  }else
	  {
         array.push(`I am ${i} strange loop.`);
	  };
    };
    return array;
};

//Counts down from number to 0
function whileLoop(number) {
	// body...
	while(number > 0){
      console.log(--number);
	};
    return "done";
};

 
 //Removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`
 function doWhileLoop(array) {
 	// body...
 	function maybeTrue() {
      return Math.random() >= 0.5    };

 	do {
     array.pop();
    } while (array.length > 0 && maybeTrue());
    
    return array;
};


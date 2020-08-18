function forLoop(n) {
	for (let i = 0; i < 25; i++) {
		if (i === 1) {
			n.push('I am 1 strange loop.');
		} else {
			n.push(`I am ${i} strange loops.`);
		};
	};
	return n;
};

//------------------

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n --;
  };
  return 'done';
};

//--------------------
let i = 0;
function doWhileLoop(num) {
    do {
        function incrementVariable() {
            i++;
            return i;
        };
        console.log('I run once regardless.');

    }
    while (incrementVariable() <= num)
    return num;
};

var forLoop = function(array) {
  for (let i = 1; i <= 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }

  return array;
};

var whileLoop = function(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }

  return 'done';
};

var maybeTrue = function() {
  return Math.random() >= 0.5;
};

var doWhileLoop = function(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());

  return array;
};

// console.log(forLoop([1,2,3]));

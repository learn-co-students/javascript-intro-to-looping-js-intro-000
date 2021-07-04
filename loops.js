const aList = []

function forLoop(aList) {
  for (let i = 0; i < 24; i++) {
    if (i === 1) {
      aList.push('I am 1 strange loop.');
    }
    else {
    } aList.push(`I am ${i} strange loop.`);
  }
  return aList;
}


function whileLoop(n) {
  let i = n;
  while (i > 0) {
    console.log(--i);
  }
  return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }

  do {
    array = array.slice(1);
  } while (array.length > 0 && maybeTrue());
  return array;
}

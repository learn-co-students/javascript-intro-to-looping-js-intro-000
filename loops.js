function forLoop(list) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      list.push("I am 1 strange loop.");
    }
    else {
      list.push(`I am ${i} strange loops.`);
    }
  }
  return list;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num--);
  }
  return "done";
}

function doWhileLoop(list) {

  do {
    list.pop();
  } while (list.length > 0 || maybeTrue());

  return list;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

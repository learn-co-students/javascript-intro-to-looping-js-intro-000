const forLoop = arr => {
  for (var i = 0; i < arr.length; i++) {
    if (i == 1) arr.push("I am 1 strange loop.")
    else arr.push(`I am ${i} strange loops.`);
  }
}

const whileLoop = n => {
  while(n>0){
    console.log(n)
    n++;
  }
}

function incrementVariable() {
  i = i + 1;
  return i;
}

const doWhileLoop = i => {
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < i);
}

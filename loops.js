function forLoop(frank) {

  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      frank.push(`I am 1 strange loop.`);
    }

    else {frank.push(`I am ${i} strange loops.`);
    }
  }
return frank;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    --num;
  }
    return "done";
}



function doWhileLoop (num) {
  let foo= 0;
  //function incrementVariable() {
   //foo = foo + 1;
  //  return foo;
//  }

  do {
    console.log("I run once regardless.");
    ++foo;
  } while (foo < num);
}



//function incrementVariable() {
//  i = i + 1;
//  return i;

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? "" : "s"}.`);
  }
  return array;
}


function whileLoop(number) {
  while(number >= 0) {
  console.log(number)
  number -= 1
  if (number === 0) {
    return "done";
  }
  }
}



function doWhileLoop(num) {
  let a = 0;
  do {
    console.log("I run once regardless.");
    a += 1;
  } while (
    a < num
  )
}

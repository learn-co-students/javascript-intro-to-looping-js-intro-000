function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`); //the readme says it not to add s on 1?
}
return array;
};
var whileLoop = (n) => {
  while (n>0) {
    console.log(n);
    n--;
  }
  return "done";
}
let p = -1;

function incrementVariable() {
  p = p + 1;
  return p;
}

 var doWhileLoop = (num) => {
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}

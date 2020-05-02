function forLoop(array){
  for(var i = 1; i <= 25; i++) {
  if(i===1){
    array.push('I am 1 strange loop.');
  }
  else {
    array.push(`I am ${i} strange loops.`);
  }
}
console.log(array)
}

var n;
function whileLoop(n){
  while(n>0){
    console.log(n);
    n--;
  }
  return 'done'
}

var num;
let i = 0;
function doWhileLoop(num){
function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log('I run once regardless.');
} while (incrementVariable() <= num);
}

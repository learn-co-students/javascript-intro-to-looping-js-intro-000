function forLoop(array) {
  for(i=0;i<25;++i) {
    array.push(`I am ${i} strange loop${i===0||i===1?'':'s'}.`);
  };
  return array;
}
function whileLoop(n) {
  while(n>0) {
    console.log(n);
    --n;
  }
  return 'done';
}
function doWhileLoop(num) {
  do {
    console.log('I run once regardless.');
    --num;
  } while (num>0);
}

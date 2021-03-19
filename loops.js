function forLoop(a){
  var v;
  for(let i=0; i<25; i++){
    (i > 1)? v = 's': v = '';
    a.push(`I am ${i} strange loop${v}.`);
  }
  return a;
}

function whileLoop(n){
  while(n > 0){
    console.log(--n);
  }
  return 'done';
}
let k = 0;
function incrementVariable(){
  return k++;
}
function doWhileLoop(n){
  do{
    console.log("I run once regardless.");
  }while (incrementVariable() < n);
}

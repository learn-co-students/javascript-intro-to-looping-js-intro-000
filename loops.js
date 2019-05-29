

// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
var forLoop =(arr) =>{
  for(let i=0;i<25;i++){
    arr.push(`I am ${i} strange loops.`);
  }
  return arr;
}

var whileLoop =(n) =>{
  while(n>0){
    console.log(n);
    n--;
  }
  return "done";
}

var doWhileLoop =(arr)=>{
  function maybeTrue() {
  return Math.random() >= 0.5
}
do{
  arr.pop();
}while(arr.length>0 && maybeTrue());
return arr;
}

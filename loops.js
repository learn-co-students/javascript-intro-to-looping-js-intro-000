arr=[]
function forLoop(arr){
  for(let i=0;i<25;i++){
    arr.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return arr
}
function whileLoop(n){
  while(n>0){
    console.log(--n);
  }
  return 'done'
}
function doWhileLoop(num){

  function decrementVariable() {
    return --num
  }
  do{
    console.log("I run once regardless.")
  }while(decrementVariable()>0)
}

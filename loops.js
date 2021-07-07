function forLoop(arr){
  for(let i = 1; i < 26; i++){
    arr.push(`I am ${i} strange loop${i ===
1 ? '' : 's'}.`)
    }
    return arr;
}

function whileLoop(num){
  while(num > 0){
    console.log(num);
    num--;
  }
  return 'done';
}

function doWhileLoop(arr){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do{
    arr.pop()
  } while (arr.length > 0 && maybeTrue());
    return arr;
}

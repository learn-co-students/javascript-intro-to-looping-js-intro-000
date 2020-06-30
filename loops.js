function forLoop(array){

  for (let i = 0 ; i < 25 ; i++){
    array.push(`I am ${i} strange loop${i <= 1 ? '' : 's'}.`)
  }

  return array;
}

function whileLoop(num){
  while (num > 0){
    console.log(num)
    num--;
  }
  return 'done'
}

var i = 0

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(int){

  do{
    console.log('I run once regardless.')
  } while (incrementVariable() <= int)
}

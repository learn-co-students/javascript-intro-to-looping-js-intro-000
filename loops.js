function forLoop(array){
  for (let i = 0; i < 10; i++) {
    //var n = i

    array[i] = `I am ${i} strange loop${i === 0 ? '':'s'}.`
    console.log(array[i]);

    //array[11] = `I am 1 strange loop`;
    //array[34] = `I am 24 strange loops.`;

  }
  var k = 0
  for (let j = 10; j<25; j++){

    array[j] = `I am ${k} strange loop${k === 1 ? '':'s'}.`
    k = k + 1;
    console.log(array[j])
  }
  for (let l = 26; l<35; l++){

    array[l] = `I am 24 strange loops.`

    console.log(array[l])
  }

  return array;
}
function whileLoop(n){
  while(n>0){
    n--;
    console.log(n);
  }
  return "done";
}
function doWhileLoop(num){
  do{
    console.log("I run once regardless");
    num--;
  }while(num>0)
}

function forLoop(array){
  for(var i = 0; i < 25; i ++){
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  return array;
}
forLoop([]);

function whileLoop(number){
  while(number > 0){
    console.log(number--);
  }
  return 'done';
}
whileLoop(5);

function doWhileLoop(array){
  function maybeTrue (){
    return Math.random() >= 0.5;
  }

  do{
    array.splice(array.length - 1, 1);
  } while (array.length > 0 || maybeTrue());
  
  return array;
}
doWhileLoop([1, 2, 3, 4, 5]);
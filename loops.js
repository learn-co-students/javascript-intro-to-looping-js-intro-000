function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
    }
    else{
      array.push(`I am ${i} string loops.`);
    };
  };
  return array;
};

function whileLoop(number){
  let i = number;

  while (i > 0) {
    console.log(number--);
    i--;
  };
  return 'done';
};

function doWhileLoop(array){
  function maybeTrue(){
    return Math.random() >= 0.5;
  };
  do{
    array.pop();
  }
  while (maybeTrue() || array.length > 0);
  return array;
};

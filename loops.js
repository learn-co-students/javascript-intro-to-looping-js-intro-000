function forLoop(array) {
  for (let i = 0; i < 25 ; i++){
    i === 0 ? array.push(["I am 1 strange loop."]) : array.push([`I am + ${i} + strange loops.`]);
  }
  return (array);
};

/*
function whileLoop(n){
  let countdown = (n-1);

  while (countdown > 0) {
    console.log('done')
  }
}

function doWhile(array){

}

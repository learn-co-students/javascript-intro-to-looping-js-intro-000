function forLoop(array){
  for(let i = 0; i < 25;i++){
    if(i == 1){
      add = "I am 1 strange loop.";
    }
    else{
      add = `I am ${i} strange loops.`;
    }
    array.push(add);
  }
  return array;
};

whileLoop = num =>{
  while(num>0){
    console.log(num--);
  }
  return "done";
};
let i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

doWhileLoop = num =>{
  do{
    console.log("I run once regardless");
  }while(incrementVariable() < num+1);
}

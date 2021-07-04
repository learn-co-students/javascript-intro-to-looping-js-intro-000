var array = [];
function forLoop(array){
  for(let i =0; i < 25; i++){
    if(i ===1){
      array.push("I am 1 strange loop.");
     } else{
      array.push(`I am ${i} strange loops.`);
     }
  }
  return array;
} 

function whileLoop(n){
  let countdown = n;
  while(countdown > 0){
    console.log(--n);
    countdown--;
  }
  return "done";
}

function doWhileLoop(array){
  var i = 0;
  function incrementVariable(){
    i = i + 1;
  }
  do{array.pop(i);
  }while(array.length > 0 && incrementVariable());
  return array;
}
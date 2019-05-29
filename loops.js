function forLoop(array){
  for (let i=0;i<=25;i++){

    if(i===1){
      array[i].push("I am 1 strange loop.");
    }
    else{
      array[i].push("I am "+i"  strange loops");
    }
  }
  return array;
}
function  whileLoop(n)
{
  while(n>0)
  {
    console.log(n);
    n--;
  }
  return "done";
}

function forLoop(array)
{
  for(let i=0;i<24;i++)
  {
    if(i===0){
    array[i+11]=`I am ${1} strange loop.`
    }
    else {
      array[i+11]=`I am ${i+1} strange loops.`
    }
  }
  return array;
}
function whileLoop(n)
{
  while(n>0)
  {
    console.log(n);
    n--;
  }
  return 'done'
}
var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}
function doWhileLoop(num)
{
  do{
    console.log("I run once regardless.")
  }
  while(incrementVariable()<=num)
}

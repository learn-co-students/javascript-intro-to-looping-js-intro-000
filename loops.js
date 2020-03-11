
function forLoop(array)
{
  for(i = 0; i < 25; i++)
  {
    if(i==1)
    {
      array.push("I am 1 strange loop.");
    }
    else
    {
      array.push(`I am ${i} strange loops.`);
    }

  }
  return array;
}

function whileLoop(number)
{
  while(number>0)
  {
  console.log(number);
  number--;
  }
  return "done";
}
function doWhileLoop(num)
{
  if(num>9) {
      num = 9;
   }
  var i=0;
  function incrementVariable() {
    i++;
    return i;
  }

  do {
    console.log(i, "I run once regardless.");
  }
  while (incrementVariable()<= num);
}

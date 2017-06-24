function forLoop(array)
{
  for(let i=0; i<25 i++)
  {
    array.push(`I am ${i} strange loop`);
  }
  return array;
}

function whileLoop(n)
{
  while(n)
  {
    console.log(n);
    i--;
  }
  return "done";
}

function doWhileLoop(array)
{
  function maybeTrue()
  {
    return Math.random() >= 0.5;
  }

  do {
    array.pop();
  } while (maybeTrue()&& array.length>0);
}

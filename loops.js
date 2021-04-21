function forLoop(array)
{
  for(let i = 0; i < 25; i++)
  {
    if(i == 1)
    {
      array.push(`I am 1 strange loop.`);
    }
    else
    {
      array.push(`I am ${i} strange loops.`);
    }
  }

  return array;
}

function whileLoop(num)
{
  while (num >-1)
  {
    console.log(num);
    num = num -1;
    if(num == 0)
    {
      return "done";
    }
  }
}

let o = 0;

function incrementVariable()
{
  o = o + 1;
  return o;
}

function doWhileLoop(number)
{

  do {
    console.log("I run once regardless.");

  } while (incrementVariable() <= number);

}

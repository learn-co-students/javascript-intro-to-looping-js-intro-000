function forLoop(array)
  {
    for (let i=0;i<25;i++)
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
    return array
  }

function whileLoop(n)
  {
    let s='not done'
    while (n>0)
    {
      s= (--n===0?'done':'not done')
      console.log(`${s} <=done counter=> ${n}`)
    }
    return s;
  }

function doWhileLoop(num)
{
  let i=0
  function incrementVariable() {
    //console.log('I run once regardless.')
  i = i + 1;
  return i;
  }

do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);

}

var forLoop = array =>
  {
    for (var i = 0; i < 25; i+=1)
      {
        array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
      }
    return array;
  }

var whileLoop = n =>
  {
    while (n>0)
      {
        console.log(n)
        n--;
      }
    return "done";
  }
var doWhileLoop = n =>
  {
    let i = 0;
    function incrementVariable()
      {
        i = i + 1;
        return i;
      }
    do
      {
        console.log("I run once regardless.");

      } while (incrementVariable() < n)
  }

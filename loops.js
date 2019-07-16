var array=[]
function forLoop(array)
  {
    for (let i = 0; i < 25; i++)
      {
        if (i === 1)
          {
            array.push("I am 1 strange loop.");
          }
        else
          {
            array.push("I am " + i + " strange loops.");
          }
      }
  return array;
  }

var number
function whileLoop(number)
  {
    while (number > 0)
      {
        console.log(--number);
      }
        return "done";
  }


  var array = [];
  array.length = 9;
  function doWhileLoop(array)
    {
        function maybeTrue()
          {
            return Math.random() >= 0.5;
          }
        do
          {
            array.pop();
            console.log("I run once regardless.");
          }
        while (array.length > 0);
            console.log("I run once regardless.");
            return array;
    }

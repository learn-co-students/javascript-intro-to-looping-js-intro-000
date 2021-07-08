function forLoop(array){// create a function with an array
for (var i = 0; i < 25; i=i+1){//give the array a value(0) and tell it that it is smaller than 25(i++ to keep adding)
if (i===1)// if i equals to 1
{array.push("I am 1 strange loop.")//push to add a string one time coz var  i=0 and till i===1 it will return
}
else
{array.push("I am "+ i + " strange loops.")//till keep pushing 25 times coz i<25 and stop
}
}
  return array
}

function whileLoop(n)//create a function with (n) as a parameter
{
  while (n>0)// while n is larger than 0 return true
  {
    console.log(--n)// it will keep logging 1 number smaller since n is larger than 0
  }
  return 'done'// once it reachs 0, it will return 'done'
}

function doWhileLoop(array){//create a function and the array is the arguement
  do  {array.shift()}// the do function runs the loopbody one time before the condition
  while (array.length > 0 && (array))// the while function tests the condition(if the )
    return 'array'//returns the array
}

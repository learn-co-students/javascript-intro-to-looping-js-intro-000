var array = []

function forLoop(array){
  for (let i = 0; i < 25; i++)
    if (i === 1)
    array.push(`I am ${i} strange loop.`)
    else
    array.push(`I am ${i} strange loops.`)
  return array
}

function whileLoop(num){
  while (num > 0) {
    num -= 1  // subtract one from number ("original argument")
    console.log(num)
  }
    return 'done'
}


function doWhileLoop(array) {
  function maybeTrue() {
    var randomNum = Math.random()
    console.log(randomNum)
    return randomNum >= 0.5  // if randomNum is greater than or equal to 0.5, then returns true
  }

  do {
    array = array.slice(1)  // removes at least one element (first) from array without changing original array
  } while (array.length > 0 && maybeTrue()) // return array while array is not empty and maybeTrue() function returns true
  // If maybeTrue() function returns false the "do-while" loop will stop and it will return the array removing
  // at least one element.
  return array
}

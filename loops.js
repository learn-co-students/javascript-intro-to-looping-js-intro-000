var forLoop = function(array){
  for (var i = 0; i < 25; i++){
    //var sent = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
    if (i === 1){
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

var whileLoop = function(n){
  while(n > 0){
    console.log(n)
    n--
  }
  return 'done'
}

var doWhileLoop = function(num){
  do{
    console.log("I run once regardless.")
    num--
  } while (num > 0)
}

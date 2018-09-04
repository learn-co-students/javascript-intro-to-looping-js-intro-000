
var array = [];
function forLoop (array) {
   for (i=0; i < 25; i++) {
     if (i===1) {
     array.push(`I am 1 strange loop.`)
   }
   else {
     array.push (`I am ${i} strange loops.`)};
}
return array
}

function whileLoop (number) {
  Math.random () *100;
  let countdown = 100
  while (number > 0){
  console.log (--number)}
  return "done"
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}

var array =[];
function doWhileLoop(array) {
  do {array.pop()
  } while (array.length >0 && incrementVariable());
  return array}

  

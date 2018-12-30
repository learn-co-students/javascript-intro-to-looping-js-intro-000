/*
function makeArray() {
  const array = []
  const t = 10

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}
*/

//var array = [];
function forLoop(array) {
for (var i = 0; i < 25; i++)
{
  if (i===1 || i===0){
  array.push(`I am ${i} strange loop.`)
}
else {
  array.push(`I am ${i} strange loops.`)
}}
  return array
}


function whileLoop (number) {

while (number > 0) {
  console.log (number--)
}
  return 'done'
}



function doWhileLoop(array) {
  do {
      array.pop()
    }
 while (array.length > 0);
return array
}

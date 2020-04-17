/*TODO: Build a function forLoop. It takes an array as an argument.
Start counting from 0, and, using a for loop, add a string to the array 25 times.
 Your for loop could look something like this*/
 function makeArray() {
   const array = []
   const t = 10
   for (let i = 0; i < t; i++) {
     array.push("I am a strange loop.")
   }
   return [array, t]
 }
//array = ["I am a strange loop." 10 times]
/*
const [array, t] = makeArray()
const strangeArray = forLoop(array)
const testArray = strangeArray.slice(array.length)
let first = "I am 1 strange loop."
let rest = `"I am ${i} strange loops."`
*/
//let i = 0;
function forLoop(array){

  for (let i = 0; i < 25 ; i++){
  if(i === 1) {
          array.push('I am 1 strange loop.');
       } else {
          array.push(`I am ${i} strange loops.`);
       }

}
return array;
}



function whileLoop(number){
while ( number > 0) {
  console.log(number-=1);
}
return 'done';
}





//example
let n = 0;
let num =0;
function incrementVariable() {
  n = n + 1;
  return n;
}
function doWhileLoop(num){

  do{
console.log("I run once regardless.")
}
while (incrementVariable() <= num )
  return num;
}

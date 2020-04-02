
function forLoop (array){
  for (i = 0; i <25; i++){
      if (i === 1){
        array.push("I am 1 strange loop.");
    } else {
        array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}

// break in functions

function whileLoop (num){
  while (num > 0) {
    console.log(--num);
  }
  return "done";
}

// break in functions

function doWhileLoop (num){
  let i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
 do {
   console.log ("I run once regardless.");
 } while (incrementVariable() <num)
}

// function doWhileLoop (num){
//   let i = 0;
//   function incrementVariable() {
//   i = i + 1;
//   return i;
// } do (incrementVariable() <num) {
//   console.log ("I run once regardless.");
// } while  {
//   console.log ("I run once regardless.")
//      }
// }

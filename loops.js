for (let num = 1; num < 6; num +=1) {
  console.log(num)
}
let i = 0;



function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {

      // Use `push` to add the string to the array
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }

  // Return your array
  return arr;
}

function whileLoop(number){
 while (number > 0) {
  console.log(--number);
 }
 return 'done'
}


function incrementVariable(){
  i = i + 1;
  return i;
}





function doWhileLoop(num){
  do {
    console.log("I run once regardless")
  }while (incrementVariable() <= num)
}
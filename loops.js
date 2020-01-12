//declare a function,
//input: array 
//output: "I am i strange loop" & if i value is anything else, "I am ${i} strange loop"
//return array

function forLoop (array) {
  for(let i = 0 ; i < 25; i++) {
    let current = array[i];
    if(current === 1) {
      return `I am 1 strange loop`;
    } else {
      return `I am ${i} strange loops.`;
    }
  }
}
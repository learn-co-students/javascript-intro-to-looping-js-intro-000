/*loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
to an array 25 times:*/
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      //array.push("I am 1 strange loop");
      var newArray = [...array, "I am 1 strange loop"];
      return newArray;
    }
    //wild goofy change withoutsaving
    else (i === 0 || i < 1) {
      //array.push("I am `${i}` strange loops.");
      var newArray = [...array, "I am `${i}` strange loop"];
      return newArray;
    }
  }
}

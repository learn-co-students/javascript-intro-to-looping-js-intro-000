function forLoop(array){
  for (i=0; i<25; i++){ // This is wrong. It should be "(i=1; i<=25; i++)"
    array = [...array, `I am ${i} strange loop${i===1 ? '': 's'}.`]
  }
  return array
}
/*The error above is what's necessary to make the test pass online.
The result is a lop that runs from 0 to 24 rather than 1 to 25.
The grammar check is correct WRT spoken English.

This works in the browser...

function forLoop(array){
  for (i=1; i<=25; i++){
    array = [...array, `I am ${i} strange loop${i===1 ? '': 's'}.`]
  }
  return array
}
 Running forLoop() returns...

 Array[25]
0:"I am 1 strange loop."
1:"I am 2 strange loops."
2:"I am 3 strange loops."
3:"I am 4 strange loops."
4:"I am 5 strange loops."
5:"I am 6 strange loops."
6:"I am 7 strange loops."
7:"I am 8 strange loops."
8:"I am 9 strange loops."
9:"I am 10 strange loops."
10:"I am 11 strange loops."
11:"I am 12 strange loops."
12:"I am 13 strange loops."
13:"I am 14 strange loops."
14:"I am 15 strange loops."
15:"I am 16 strange loops."
16:"I am 17 strange loops."
17:"I am 18 strange loops."
18:"I am 19 strange loops."
19:"I am 20 strange loops."
20:"I am 21 strange loops."
21:"I am 22 strange loops."
22:"I am 23 strange loops."
23:"I am 24 strange loops."
24:"I am 25 strange loops."
*/

function whileLoop(number){
  while (number != 0){
    console.log(number)
    number--
  }
  return "done"
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while (maybeTrue() && array.length > 0)
  return array
}
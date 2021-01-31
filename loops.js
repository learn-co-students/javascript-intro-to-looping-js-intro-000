//let gifts = ['teddy bear', 'drone', 'doll']

//function wrapGift(gift) {
  //console.log('Wrapped ${gift} and added a bow!')
//}

//for ([initialization]; [condition]; [iteration]) {
  //  [loopBody];
//}

//for (let num = 1; num < 6; num += 1) {
  //console.log(num)
//}

//for (let i = 1; i < 100; i++) {
  //console.log('Hello World the' +i+ 'time');
//}

//let gifts = ['teddy bear', 'drone', 'doll'];

//for (let i = 0; i < 3; i++) {
  //console.log('Wrapped ${gifts[i]} and added a bow!');
//}


//let gifts = ["teddy bear", "drone", "doll", "bike"];

//for (let i = 0; i < gifts.length; i++) {
  //console.log(`Wrapped ${gifts[i]} and added a bow!`);
//}


//let gifts = ["teddy bear", "drone", "doll"];

//function wrapGift(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
  //}
//}


function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) {
  array.push(`I am 1 strange loop.`)
} else {
  array.push(`I am ${i} strange loops.`)
}
}
return array
}

function whileLoop(n) {
  let countdown = n
  while (countdown > 0) {
    console.log(--countdown)
}
return "done";
}


function doWhileLoop(num) {
  let i = 0
  function incrementVariable() {
    i = i + 1
    return i
  }
//}

do {
  console.log('I run once regardless.')
}while(incrementVariable() < num)
}

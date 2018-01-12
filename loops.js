function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  var newArray = array[i];
    array.push(i === 1 ? "I am 1 strange loop." : "I am ${i} strange loops.");
  }
  return array;
}

function whileLoop(number) {
  let countdown = number;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }

  do {
    array.pop();
    return array;
  } while (array.length > 0 && maybeTrue());
}


 /*

   describe('doWhileLoop(array)', () => {
     it('removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`', () => {
       const [array, t] = makeArray()
       const l = array.length

       const newArray = doWhileLoop(array)

       expect(newArray).to.have.length.of.at.most(l - 1)
     })
   })
 })

 */

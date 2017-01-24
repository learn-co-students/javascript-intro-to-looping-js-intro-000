

/*
describe('forLoop(array)', () => {
  it('adds `"I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."` to an array 25 times', () => {
    const [array, t] = makeArray()
    const strangeArray = forLoop(array)

    expect(strangeArray.length).to.equal(t + 25)

    const testArray = strangeArray.slice(array.length)

    for (let i = 0, l = testArray.length; i < l; i++) {
      let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
      expect(testArray[i]).to.equal(s)
    }
  })
})
*/
function forLoop(array) {

        for (var i = 1; i <= 25; i++) {
                                        array.push(   `I am ${i} strange loop${i === 1 ? '' : 's'}`     )
        }

  return array;
}
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
describe('whileLoop(n)', () => {
  it('counts down from n to 0', () => {
    const spy = chai.spy.on(console, 'log')
    const n = Math.floor(Math.random() * 100)

    expect(whileLoop(n)).to.equal('done')
    expect(spy).to.have.been.called.exactly(n)

    console.log.reset()
  })
})
*/
function whileLoop(n) {

  //console.log(n);

        while (n > 0) {
                              console.log(--n);
        }

  return 'done';
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
describe('doWhileLoop(array)', () => {
  it('removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`', () => {
    const [array, t] = makeArray()
    const l = array.length

    const newArray = doWhileLoop(array)

    expect(newArray).to.have.length.of.at.most(l - 1)
  })
})
*/
function doWhileLoop(array) {

      function maybeTrue() {
        return Math.random() >= 0.5
      }

     //var isNotZero = maybeTrue() ;

      do {
        array.pop();

      //} while (  array.length > 0 && isNotZero  );
      } while (  array.length > 0 && maybeTrue()  );

  return array;
}

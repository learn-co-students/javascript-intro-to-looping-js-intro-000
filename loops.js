function forLoop(array) {
  let makeA = [];
  for (let i=0; i<25; i++){
    makeA[i] = `"I am ${i+1} strange loop${i === 0 ? '' : 's'}."`
  }

  return makeA;

}

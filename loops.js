
function forLoop(array){
  for (let i = 1; i < 25; i++) {
    array[i] = `"I am ${i} strange loop${i === 1 ? '' : 's'}."`
  }
  return array
}

function forLoop(array) {
  for (let i=0; i<26; i++) {
    if (i===1) {
      array.push('I am 1 strange loop.')
    }
    else if (i===25) {
      return array
    }
    else {
      array.push(`I am ${i} strange loops`)
    }
  }
}

whileLoop = (n) => {
  while (n>0) {
    console.log(n--)
  }
  return 'done'
}

doWhileLoop = (array) => {
  function maybeTrue() {
  return Math.random() >= 0.5
}
  if (array = []) {
    return array
  }
  else do {
    array.pop
  }
  while (maybeTrue())
  return array
}

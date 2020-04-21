forLoop = (array) => {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

whileLoop = (n) => {
  while(n > 0) {
    console.log(n)
    n--
  }

  return 'done'
}

doWhileLoop = (n) => {
  do {
    console.log(n)
    n--
  } while(n > 0)

  return 'done'
}

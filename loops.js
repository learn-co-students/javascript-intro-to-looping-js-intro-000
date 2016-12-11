function forLoop (myArray) {
  for (let i=0; i<25; i++) {
    if (i = 0) {
      myArray = ["I am 1 strange loop."]
    }
    else {
      myArray.push ("I am "+ (i+1) + "strange loops.")
    }
  }
  return myArray;
}

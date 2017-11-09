function forLoop(array){
  //notes   ++ and 1 each time.
  for (let i = 0; i < 25; i++) {
    //always use === sign... also  "shift and unshift pop. all sign of remove."
    if(i === 1) {
      array.push("I am 1 strange loop");
    } else {
      array.push (`I am ${i} strange loops`);
    }
  }
  return array
}

 function whileLoop(n){
   //total difference between While and while (the cap)
    while (n > 0) {
      // -- takes away 1
      console.log(--n);
    }
    return "done"
 }

 function maybeTrue() {
   return Math.random() >= 0.5
 }

 function doWhileLoop(array){
    do {
   array.shift()
       }
  while (array.length > 0 && maybeTrue());
   //  && means both condition must be true. 

  return array
}

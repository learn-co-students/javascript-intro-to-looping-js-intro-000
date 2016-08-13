function forLoop(arr){
  for (let i=0; i<25; i++){
    if (i=1){
      arr.push("I am 1 strange loop.");
    }
    else{
      arr.push("I am ${i} strange loops.");
    }
  }
};

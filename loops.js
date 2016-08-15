function forLoop(array){
  for (var i = 0; i < array.length; i++){
    if(i = 1){
      console.log("I am 1 strange loop.");
    }
    else{
      console.log("I am ${i} strange loop.");
    }
  }
}

forLoop([1,2,3,4,5]);

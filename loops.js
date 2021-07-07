function forLoop(x){
  for(var i=0; i<25; i++){
    if(i===1){
    x.push("I am 1 strange loop.");
      }
    else{
    x.push(`I am ${i} strange loops.`);
      }
    }
      return x;
}

function whileLoop(n) {
  while (n > 0) {
  console.log(--n);
}
return 'done';
}



  function maybeTrue() {
    return Math.random() >= 0.5
    }

    function doWhileLoop(x){
      do{
        x.shift();
      } while(x.length > 0 && maybeTrue());

        return x;
}

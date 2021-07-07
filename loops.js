
function forLoop(arr) {
   for (var i = 0; i < 25; i++) {
     if (i == 1) {
       arr.push("I am 1 strange loop.")
     }
      else {
        arr.push("I am " + i + " strange loops.")
      }
   }
   return arr 
}


function whileLoop(n){
  while (n > 0) {
   console.log(n);
   n--;
  }
  return 'done'
}



var i = 0;
 
function incrementVariable() {
  i = i + 1;
}
 


function doWhileLoop(arr){
  
  do {arr = arr.pop;
  incrementVariable();}
  
  while (arr.length > 0)

  return arr
}










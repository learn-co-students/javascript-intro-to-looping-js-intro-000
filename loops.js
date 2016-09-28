function forLoop(arr){
    for(let i = 0; i < 25; i++ ){
      if(i === 1){
         arr.push('I am 1 strange loop.');
      }
      else {
        arr.push('I am ${i} strange loop.');
      }
    }
   return arr;
}


function whileLoop(n){
   while(n > 0){
      console.log(--n);
   }
   return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array){
   do{
       array.pop();
   } while(array.length > 0 && maybeTrue());
   return array;
}

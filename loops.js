

function forLoop(array){

 var size= array.length;
 for(var i=size;i<=24+size;i++){
   array[i]=`I am ${i} strange loop${i===1?'':'s'}.`

 }
 return array;

}

function whileLoop(n){
  while(n != 0){
    console.log(n);
        n--;


  }
  return 'done';

}
function maybeTrue() {
  return Math.random() >= 0.5
}



function doWhileLoop(array){

  do{
    console.log("Hello");
    array.pop();

  } while(array.length>0 && maybeTrue())

  return array;
}

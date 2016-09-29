/*-----> For Loop Intro <--------*/



function forLoop(a){

 for(var i = 0; i < 25; i++){

   if(i === 1){
a.push(`I am ${i} strange loop.`);
   }
  else{
a.push(`I am ${i} strange loops.`);
 }
}
  return a;
}


function whileLoop(n) {


  while(n > 0) {

    console.log(--n);
  }
  return "done";

}
whileLoop(25);



function maybeTrue() {
 return Math.random() >= 0.5
}


function doWhileLoop(arr) {

do {
   arr.shift();
 } while (arr.length > 0 && maybeTrue());
 return arr;

}

var forLoop= array =>{
  for(let i=0; i<25; i+=1){
    if(i===1) {array.push(`I am 1 strange loop.`)}
    else {array.push(`I am ${i} strange loops.`)}
  }
  return array;
}

var whileLoop= n =>{
  while(n!=0){
    console.log(n);
    n-=1;
  }
  return 'done';
}

let i=0;
var incrementVariable= () =>{
  i+=1;
  return i;
}
var doWhileLoop= n =>{
  do{
    console.log(`I run once regardless.`);
  }while(incrementVariable()<=n)
}

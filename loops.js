function forLoop(arrayarg) {

for (var i = 0;i < 25; i++) {
    if (i===1) {arrayarg[i] = `I am 1 strange loop.`}
       else {arrayarg[i] = `I am ${i} strange loops.`}
}
return arrayarg
}

function whileloop(numarg){
while (numarg >-1) {
    console.log(numarg)
    --numarg
}
return 'done'
}

function doWhileLoop(arrayarg) {
do{
   arrayarg.shift()
   console.log(arrayarg)
  } while(arrayarg.length > 0 && maybeTrue());
return arrayarg
}

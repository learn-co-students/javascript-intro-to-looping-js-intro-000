function forLoop(array) {

    for (index = 0; index < 25; index++) {

       if (index === 1) {
            array.push("I am " + index + " strange loop.");
            continue;
        } else {
             array.push("I am " + index + " strange loops.");
        }
    }
    return array;
}

function whileLoop(number){
    while(number >=1){
        console.log(--number);
    }
   return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop(array){
    do {
        array.pop();
    }while(array.length > 0 || maybeTrue() == false);

    return array;
}

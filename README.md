# JavaScript Loops

## Overview

* About
* The For Loop
* The While Loop
* The Do-While
* Resources

## About

Loops are used to execute the same block of code a specified number of times.

## The For Loop

The `for` loop is made up of four statements and has the following structure:
      
```javascript
for ( [initialization]; [condition]; [iteration] ) {
  [loopBody]
}
```

- initialization
  An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword

- condition
  An expression evaluated before each loop iteration. If this expression evaluates to true, statement is executed

- iteration
  A statement executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter and thus bringing the loop ever closer to its end

- loopBody
  code which runs on every iteration as long as condition evaluates to true

  > Use `for` loop when you know how many times you want the loop to run

  Example:
  The code belong will print the string "Hello World!" 99 times
  
```javascript
// i is set to equal to 0
// as long as i is less than 100 execute the code in the loopBody
// - which is print "Hello World"; increment i each time code in loopBody is executed

for (var i = 0, i < 100, i++) {
  console.log( "Hello World! for the " + i + " time" );
}
```

You'll encounter `for()` loops again when you learn about iteration through object literals.

## The While Loop

The `while` loop similar to an if statement, except that its body will keep executing until the condition evaluates to false. Has the following structure:
  
```javascript
while ([condition]) {
  [loopBody]
}
```

- condition
  An expression evaluated before each pass through the loop (each pass is either an increment or a decrement). If this condition evaluates to true, statement is executed

  > Use `while` loop when you don't know how many times your loop needs to run - that is your condition is dependent on some a dynamic function/return value

Example:

```javascript
// i is set to Zero
var i = 0;

// while i is less than Zero
while ( i < 100) {
  console.log( "Hello World! for the " + i + " time");

  //  instruction for each pass through loop
  ++i;
}
```

## The Do-While Loop

The `do-while` loop is almost exactly the same as the while loop, except for the fact that the loop’s body is executed at least once before the condition is tested. Has the following structure:
  
```javascript
do {
  [loopBody];
} while ([condition]);
```
  
You will rarely see `do-while` used since very few situations require a loop that blindly executes at least once.

## Resources

* []()
* []()

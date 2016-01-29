# JavaScript Loops

##Objectives
+ Build a for loop
+ Build a while loop
+ Build a do-while loop
+ Explain the purpose of a loop
+ Explain the difference between each type of loop in JS

## About

Loops are used to execute the same block of code a specified number of times. You've seen them in Ruby. For instance, think back to the `times` loop:

```ruby
3.times do
  puts "Hello world!"
end

# The above prints:
# Hello world!
# Hello world!
# Hello world!
```

Instead of a `times` loop, JavaScript offers a `for` loop. Ruby also knows how to execute a block of code `while` a condition is true. JavaScript has an almost identical equivalent: the `while` loop. JavaScript also has a `do-while` loop, which we'll cover at the end of this reading.

This is a code-along, so follow along with the instructions in each section. There are tests to make sure you're coding your solutions correctly.

## The For Loop

In JavaScript, the `for` loop is the most common loop. The `for` loop is made up of four statements and has the following structure:

#### Syntax

```javascript
for ( [initialization]; [condition]; [iteration] ) {
  [loopBody]
}
```

- initialization
  An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword

- Condition
  + An expression evaluated before each loop iteration. If this expression evaluates to true, statement is executed

- Iteration
  + A statement executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter and thus bringing the loop ever closer to its end

- loopBody
   + Code which runs on every iteration as long as condition evaluates to true

  > Use `for` loop when you know how many times you want the loop to run

#### Example

The code below will print the string "Hello World!" 99 times
  
```javascript
// i is set to equal to 1
// as long as i is less than 100 execute the code in the loopBody
// - which is print "Hello World"; increment i each time code in loopBody is executed

for (var i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" );
}

// The above prints:
// Hello World the 1 time
// Hello World the 2 time
// Hello World the 3 time
```

You'll encounter `for()` loops again when you learn about iteration through object literals.

+ Build a function `loopExcitement`. Inside the function, create a variable `sentences` which stores an empty array. On the next line, you'll need to set up a for loop. Your initialization should set your counter variable equal to 50. Your condition should check to see if your counter variable is less than 75. You should increment your counter variable by one. The body of the loop should add the string `"i am looping"` to the `sentences` array. The string should be in the array 25 times. The function should return the `sentences` array.

## The While Loop

The `while` loop similar to an if statement, except that its body will keep executing until the condition evaluates to false. Has the following structure:
  
#### Syntax

```javascript
while ([condition]) {
  [loopBody]
}
```

 Use `while` loop when you don't know how many times your loop needs to run - that is your condition is dependent on some a dynamic function/return value

#### Example

```javascript
var age = 13;

while (age < 16 ) {
  console.log("You can't have my car keys - you're too young!");
  age ++;
}
```

In this example, the `age` variable could be set to anything, especially if this loop was nested inside a function and the variable was set programatically.This loop will run until the age variable is equal to 16.

+ Create a function `loopingFun`. This function should create an variable `i` that stores the number `10`. Next, the function should declare a variable `num` that does not store a value yet. The while loop should check the condition that the `i` is less than 17. The body of the while loop should have the `num` variable store `i` and then increment `i` by one. The function should return `num`.

## The Do-While Loop

The `do-while` loop is almost exactly the same as the while loop, except for the fact that the loop's body is executed at least once before the condition is tested. Has the following structure:

#### Syntax

```javascript
do {
  [loopBody];
} while ([condition]);
```
  
You will rarely see `do-while` used since very few situations require a loop that blindly executes at least once. That being said, take a look at the example below:

#### Example

```javascript
var i = 0;

do {
   i += 1;
   console.log(i);
} while (i < 5);

// The above prints:
// 1
// 2
// 3
// 4
// 5
```

+ Build a function `alwaysLooping`. This function should accept a number as a parameter. The body of the function should define a variable `love` which stores an empty array. The do-while function should add the string `"JavaScript"` to the `love` array and increment the parameter. The do-while loop should contain the condition that the parameter number is less than 10. The function should return the `love` array.

## Conclusion

If seeing all of these new loops all at once is freaking you out, take a deep breath. Remember, 98% of the time you will want to use a `for` loop. A general heuristic for choosing which loop, is try a `for`. If using `for` doesn't serve your purposes, then go ahead and try a different loop. Also remember that you can always refer to documentation on these loops at any time. After some time coding in JavaScript, writing a `for` loop will come as naturally to you as writing an `each` loop to iterate over an array in Ruby.

## Resources

* [Codecademy - For Loop](http://www.codecademy.com/glossary/javascript/loops#for-loops)
* [MDN - For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
* [Codecademy - While Loop](http://www.codecademy.com/glossary/javascript/loops#while-loops)
* [MDN - While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
* [Codecademy - Do-While Loop](http://www.codecademy.com/glossary/javascript/loops#do-while-loops)
* [MDN - Do-While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/intro-to-looping.js' title='JavaScript Loops'>JavaScript Loops</a> on Learn.co and start learning to code for free.</p>

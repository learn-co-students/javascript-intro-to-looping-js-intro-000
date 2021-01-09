# JavaScript Loops

## Objectives

- Build a for loop
- Build a while loop
- Build a do-while loop
- Explain the purpose of a loop
- Explain the difference between each type of loop in JS

## Introduction

Sometimes, we need to do things repeatedly in life - our daily routines, for
example. We wake up every morning. We got to work or school repeatedly. We
repeatedly decide what to watch next on YouTube/Netflix.

In programming, we also often need to complete tasks repeatedly. Say we wanted
to count from one to five using `console.log`. We _could_ write:

```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
```

This logs:

```js
1
2
3
4
5
```

This works, but it is very repetitive. Its also 'hardcoded' - that is to say, it
will only work if we want to log the numbers `1` through `5`. We could instead
make this code a bit more abstract and replace the numbers with a variable,
incrementing the variable after each log:

```js
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
```

This produces the same result as the previous logs, but we now have the ability
to change what number we start counting from. If we assigned `num` to `5` at the
beginning, we would get:

```js
5
6
7
8
9
```

Cool, but we still have an issue - this code is way to repetitive. In fact,
abstracting the code made it _even more_ repetitive!  

Instead of having to write the same lines over and over, we can use a _loop_.
Loops are used to execute the same block of code a specified number of times.

In this lesson, we'll take a closer look at loops and see how they can clean up
and simplify our code. This is a code-along, so follow along with the
instructions in each section. There are tests to make sure you are coding your
solutions correctly.

## Another Example

Let's imagine we have a bunch of gifts to wrap and want to use code to keep
track of the process. The gifts all happen to be the same size and shape, so for
every gift, we need to cut a similarly sized piece of wrapping paper, fold it up
over the edges of the gift, tape it together, and add a nice little card. Then
we set the wrapped gift aside and moved onto the next gift.

In programming terms, we can think of the gifts as an array and the act of
wrapping them as a function. We could, of course, write the following code:

```javascript
let gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}
```

We could then call `wrapGift()` on each gift individually:

```javascript
wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);
```

But if we had more gifts, we'd have to write out more calls to `wrapGift()` —
it would probably get tiring after a while.

This is where loops come in handy! With a loop, we can just write the repeated
action _once_ and perform the action on every item in the collection.

## About Loops

JavaScript loops come in a few different flavors — namely, `for`, `while`, and
`do-while`. We'll cover each of these kinds of loop below.

## The `for` Loop

Of the loops in JavaScript, the `for` loop is the most common. The `for` loop is
made up of four statements and has the following structure:

#### Syntax

```javascript
for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}
```

- initialization
  - An expression (including assignment expressions) or variable declaration.
    Typically used to initialize a counter variable. This expression may optionally
    declare new variables with the let keyword
- Condition
  - An expression evaluated before each loop iteration. If this expression evaluates
    to true, statement is executed
- Iteration
  - A statement executed at the end of each iteration. Typically, this will involve
    incrementing or decrementing a counter, bringing the loop ever closer to its end
- loopBody
  - Code which runs on every iteration as long as the condition evaluates to true

> Use a `for` loop when you know how many times you want the loop to run (for
> example, when you have an array of known size).

#### Examples

Going back to the original counting example, we could use a `for` loop to count
numbers:

```js
for (let num = 1; num < 6; num += 1) {
  console.log(num)
}
```

The above loop will produce:

```js
1
2
3
4
5
```

The same results as our initial code! In this loop design, we declare a
variable, `let num = 1`, as the initialization. Then, we establish the
condition, that `num` is _less than_ 6. The third thing we do is define the
iteration - `num += 1`. Combined, these three statements indicate that, starting
at `num = 1`, this loop will execute over and over until the condition is no
longer met. After each loop, `num` is incremented by 1.

With these configured, all we need to provide inside the loop is a single
`console.log(num)`. If we wanted to, we could change the initial value, the
condition and/or the iteration, giving us good abstraction and flexibility.

Let's take a look at another, more complex example. The code below will print
the string "Hello World!" 99 times:

```javascript
// i is set equal to 1
// as long as i is less than 100 execute the code in the loopBody
// - which is print "Hello World"; increment i each time the code in loopBody is executed

for (let i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}

// The above prints:
// Hello World the 1 time
// Hello World the 2 time
// Hello World the 3 time
```

You'll encounter `for` loops again when you learn about iterating through object
literals.

Now, let's revisit our gift wrapping example. Given the following array:

```js
let gifts = ["teddy bear", "drone", "doll"];
```

If we wanted to write a function that logged a message for each gift in the
array, we would need to access each element one after the other. Sounds loopy!

```js
let gifts = ["teddy bear", "drone", "doll"];

for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
```

The above loop will log:

```bash
Wrapped teddy bear and added a bow!
Wrapped drone and added a bow!
Wrapped doll and added a bow!
```

This isn't _exactly_ what we want. If we added another gift to the array, we
would have a problem. Since the conditional is `i < 3`, this loop will only
increment `i` from `0` to `1` to `2` and wouldn't log the extra gift. However, if
we _change_ the condition to be based off the length of our array, we'll be in
great shape:

```js
let gifts = ["teddy bear", "drone", "doll", "bike"];

for (let i = 0; i < gifts.length; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
```

Now, no matter the length of the array, our loop will be able to iterate over
every element.

To finally wrap up, we can wrap the loop in a function:

```js
let gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
}

wrapGift(gifts)
```

**TODO**: Build a function `forLoop`. It takes an array as an argument. Start
counting from 0, and, using a `for` loop, add a string to the array 25 times.
Your `for` loop could look something like this:

```javascript
for (let i = 0; i < 25; i++) {
  // ...
}
```

We don't want just any string.

- If your `i` value is `1`, add the string `"I am 1 strange loop."`
- If your `i` value is anything else, add the string `"I am ${i} strange loops."`

Remember flow control with `if` and `else`? And how do we
_interpolate_ `i`?

Once the loop has finished, return the array full of strings.

## The `while` Loop

The `while` loop is similar to an `if` statement, except that its body will keep
executing until the condition evaluates to false. It has the following
structure:

#### Syntax

```javascript
while ([condition]) {
  [loopBody];
}
```

> A `while` loop is often used when we don't know how many times a loop needs to
> run - that is, the condition is dependent on a dynamic function/return value.
> However, we can actually write any `for` loop as a `while` loop if we choose.

#### Examples

Here is our counting example as a `while` loop:

```js
let num = 1

while (num < 6) {
  console.log(num)
  num += 1
}
```

Notice that in a `for` loop, the initialization, condition and iteration
statements are all contained in the loop syntax. In a `while` loop, all three
statements still exist, but the initialization is _outside_ the loop and the
iteration is _inside_. Only the condition is contained in the loop syntax.

One common mistake when writing `while` loops - we must always remember to
include the iteration statement (`num += 1`). Otherwise, the loop will run
forever!

Here is another example, this time, counting down:

```js
let countdown = 100;

while (countdown > 0) {
  console.log(--countdown);
}
```

In a more complex example, we can see how `while` loops are handy when we don't
know exactly how many times we need to loop:

```javascript
function maybeTrue() {
  return Math.random() >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}
```

In this example, `maybeTrue()` returns `true` 50% of the time, and our loop runs
until `maybeTrue()` returns `false`. We've used a `while` loop because we don't
have any specific number to count up or down to in our loop — we just want it to
run until the condition is no longer met. In this example, it is possible the
condition will be met immediately, causing the loop to _never run_.

**TODO**: Create a function called `whileLoop` in `loops.js`. The function
should take a number as an argument. Using a `while` loop, count down (using
`console.log`) from the passed in number to 0. Then return the string `'done'`.

## The Do-While Loop

The `do-while` loop is almost exactly the same as the while loop, except for the
fact that the loop's body is executed at least once before the condition is
tested.

#### Syntax

The `do-while` loop has the following structure:

```javascript
do {
  [loopBody];
} while ([condition]);
```

You will rarely see `do-while` used since very few situations require a loop
that blindly executes at least once. That being said, take a look at the example
below:

#### Example

```javascript
let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 5);
```

Remember how we couldn't be sure with the plain `while` loop above that the body
would run using `maybeTrue()`? With `do`, we _can_ be sure that the body will
run!

**TODO**: Define a function called `doWhileLoop` in `loops.js`. The function should take
an integer as an argument. Use the `incrementVariable()` function (you can copy it
from this README) in the condition, and console log
`"I run once regardless."` while `incrementVariable()` returns a number less
than the parameter received. (Your condition might look something like
`incrementVariable() < num`.) Remember that it should also console log when
receiving 0 as a parameter because the do-while runs before the condition is
checked.

## Conclusion

If seeing all of these new loops all at once is freaking you out, take a deep
breath. Remember, 98% of the time you will want to use a `for` loop. A general
heuristic for choosing which loop, is try a `for`. If using `for` doesn't serve
your purposes, then go ahead and try a different loop. Also remember that you
can always refer to documentation on these loops at any time. After some time
coding in JavaScript, writing a `for` loop will come as naturally to you as
wrapping one gift after another.

## Resources

- [Codecademy - For Loop](http://www.codecademy.com/glossary/javascript/loops#for-loops)
- [MDN - For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Codecademy - While Loop](http://www.codecademy.com/glossary/javascript/loops#while-loops)
- [MDN - While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [Codecademy - Do-While Loop](http://www.codecademy.com/glossary/javascript/loops#do-while-loops)
- [MDN - Do-While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-intro-to-looping'>Javascript Intro To Looping</a> on Learn.co and start learning to code for free.</p>

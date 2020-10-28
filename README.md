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

In programming, we also often need to complete tasks repeatedly. 

1. Build a function `forLoop`. It takes an array as an argument. Start
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

2. Create a function called `whileLoop` in `loops.js`. The function
should take a number as an argument. Using a `while` loop, count down (using
`console.log`) from the passed in number to 0. Then return the string `'done'`.

3.  Define a function called `doWhileLoop` in `loops.js`. The function should take
an integer as an argument. Use the `incrementVariable()` function (you can copy it
from this README) in the condition, and console log
`"I run once regardless."` while `incrementVariable()` returns a number less
than the parameter received. (Your condition might look something like
`incrementVariable() < num`.) Remember that it should also console log when
receiving 0 as a parameter because the do-while runs before the condition is
checked.

'use strict';

describe('loopExcitement', function() {

  it("returns an array of the string 'i am looping' 25 times", function() {
    expect(loopExcitement()).toEqual(["i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping", "i am looping"]);
  });

  it("I am looping should be in the array 25 times", function(){
    expect(loopExcitement().length).toEqual(25);
  });
});

describe('loopingFun', function() {

  it("returns the largest number that allows the loop to execute", function() {
    expect(loopingFun()).toEqual(16);
  });


});

describe('alwaysLooping', function() {

  it("adds 'JavaScript' to the array 5 times if 5 is the parameter", function() {
    expect(alwaysLooping(5).length).toEqual(5);
    expect(alwaysLooping(5)).toEqual(["JavaScript", "JavaScript", "JavaScript", "JavaScript", "JavaScript"]);
  });

  it("adds 'JavaScript' to the array one times if the parameter is great than 10", function() {
    expect(alwaysLooping(12)).toEqual(["JavaScript"]);
    expect(alwaysLooping(12).length).toEqual(1);
  });


});
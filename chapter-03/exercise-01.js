/*
  Chapter 03 - Functions
  Exercise 01 - Minimum
*/

const min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

console.log(min(0, 10)) // -> 0
console.log(min(0, -10)) // -> -10

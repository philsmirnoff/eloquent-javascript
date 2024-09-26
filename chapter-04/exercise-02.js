/*
  Chapter 04 - Data Structures: Objects and Arrays
  Exercise 02 - Reversing an array
*/

const reverseArray = (arr) => {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

const reverseArrayInPlace = (arr) => {
  let len = arr.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
};

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray)); // → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]

/*
  Chapter 04 - Data Structures: Objects and Arrays
  Exercise 03 - A list
*/

const arrayToList = (arr) => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

const listToArray = (list) => {
  let arr = [];

  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

const prepend = (element, list) => {
  return { value: element, rest: list };
};

const nth = (list, index) => {
  let node = list;

  for (let i = 0; node != null; i++) {
    if (i === index) {
      return node.value;
    }
    node = node.rest;
  }
  return undefined;
};

console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20

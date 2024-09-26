/*
  Chapter 04 - Data Structures: Objects and Arrays
  Exercise 04 - Deep comparison
*/

const deepEqual = (a, b) => {
  if (a == b) return true;

  if (
    typeof a === "object" &&
    a !== null &&
    typeof b === "object" &&
    b !== null
  ) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, { here: 1, object: 2 })); // → false

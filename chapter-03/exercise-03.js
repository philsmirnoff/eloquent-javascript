/*
  Chapter 03 - Functions
  Exercise 03 - Bean counting
*/

const countChar = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) count += 1;
  }
  return count;
}

const countBs = (string) => {
  return countChar(string, "B")
}

console.log(countBs("BOB")) // -> 2
console.log(countChar("kakkerlak", "k")) // -> 4

/*
  Chapter 02 - Program Structure
  Exercise 01 - Looping a triangle
*/

const printTriangle = () => {
  let hash = "#"
  for (let i = 1; i <= 7; i++) {
    console.log(hash);
    hash += "#"
  }
}

printTriangle()

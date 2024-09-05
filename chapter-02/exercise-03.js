/*
  Chapter 02 - Program Structure
  Exercise 03 - Chessboard
*/

const createChessboard = (width = 8, height = 8) => {
  let chessboard = "";

  for (let row = 0; row < width; row++) {
    for (let col = 0; col < height; col++) {
      if ((row + col) % 2 === 0) {
        chessboard += " ";
      } else {
        chessboard += "#";
      }
    }
    chessboard += "\n";
  }

  return chessboard;
};

console.log(createChessboard(8, 16));
console.log(createChessboard())

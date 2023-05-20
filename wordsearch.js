const chai = require("chai");
const assert = chai.assert;

const wordSearch = (letters, word) => {

  const transpose = function (matrix) {
    let arr = [];
    

    for (let i = 0; i < matrix.length; i++) {
      for (let x = 0; x < matrix[i].length; x++) {
        arr[x] ? arr[x].push(matrix[i][x]) : arr.push([matrix[i][x]]);
      }
    }
    return arr;
  };

  // map the horizontal rows
  const horizontalJoin = letters.map((ls) => ls.join(""));

  // map the vertical rows
  const tranLet = transpose(letters);
  const verticalJoin = tranLet.map((ls) => ls.join(""));

  // search within vertical
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  // search within horizontal
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;

// completed via paired programing between @NFerracuti & @calgarybino

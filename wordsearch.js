// Pair Programmed with Thea Ganden and Cameron Cheng

const wordSearch = (letters, word) => {
  let newLetterArr = []; //new letter array is the transposed array
  // vertical iteration:
  for (let i = 0; i < letters[0].length; i++) {
    let emptyArr = [];
    newLetterArr.push(emptyArr);
    for (let p = 0; p < letters.length; p++) {
      newLetterArr[i][p] = letters[p][i];
    }
  }
  const verticalJoin = newLetterArr.map((vls) => vls.join(""));
  for (l of verticalJoin) {
    //loops through the lines of arrays of vertical join
    if (l.includes(word)) {
      return true; //the letter includes word return true
    }
  }
  const horizontalJoin = letters.map((ls) => ls.join("")); // new array called horizontalJoin
  for (l of horizontalJoin) {
    //loops through the lines of arrays of horizontal join
    if (l.includes(word)) {
      return true; //the letter includes word return true
    }
  }
  return false;
};

console.log(
  wordSearch(
    [
      ["A", "W", "C", "F", "Q", "U", "A", "L"],
      ["S", "E", "J", "N", "F", "E", "L", "D"],
      ["Y", "F", "C", "F", "Q", "U", "A", "L"],
      ["H", "M", "A", "T", "E", "V", "R", "G"],
      ["W", "H", "T", "S", "Y", "E", "R", "L"],
      ["B", "F", "R", "E", "N", "E", "Y", "B"],
      ["U", "B", "T", "W", "A", "P", "A", "I"],
      ["O", "D", "C", "A", "K", "U", "A", "S"],
      ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ],
    "CAT"
  )
);
module.exports = wordSearch;

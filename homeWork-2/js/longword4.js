// // TASK 4

function findLongestWord (str){
  let words = str.split(' ');
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('T quick brown fox jumpedasd over the lazy dog'));

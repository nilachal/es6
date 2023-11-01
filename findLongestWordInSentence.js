const given = "Whatever that may be. Find the word that is longest in the setentce"

const findLongestWord = (given) => {
	const splittedWord = given.split(" ")
  const lengthObj = {}
  for(let word of splittedWord) {
  	lengthObj[word] = word.length
  }
  let maxKey = null;
let maxValue = -Infinity;
  for (const key in lengthObj) {
  if (lengthObj[key] > maxValue) {
    maxKey = key;
    maxValue = lengthObj[key];
  }
}
return [maxKey, maxValue]
}

console.log(findLongestWord(given))

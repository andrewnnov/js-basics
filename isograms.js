const word = "Dermatogglyphics";

const lengthOFWord = word.length;
console.log(lengthOFWord);

const charArray = word.split("");
const charSet = new Set(charArray);

console.log(charSet.size);

const isIsogram = new Set(word.toLowerCase()).size == word.length;
console.log(isIsogram);

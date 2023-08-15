const inputString = "this is my string";
const inputStringArr = inputString.split("");
console.log(inputStringArr);

const vowelsLetters = ["a", "e", "i", "o", "u"];

for (let j = 0; j < inputStringArr.length; j++) {
  if (vowelsLetters.includes(inputStringArr[j])) {
    inputStringArr[j] = j + 1;
  }
}

console.log(inputStringArr.join(""));

function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (element, index) => index + 1);
}

console.log("New value is " + vowel2index(inputString));

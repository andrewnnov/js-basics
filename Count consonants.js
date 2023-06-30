const str = "01234567890_";
const string = str.toLowerCase();
console.log(string);

const arrVowel = ["a", "e", "i", "o", "u"];

let arrLetters = string.split("");
console.log(arrLetters);

let sum = 0;

for (let elem of arrLetters) {
  if (/^[a-z]$/.test(elem) && arrVowel.indexOf(elem.toLowerCase()) === -1) {
    sum++;
  }
}

console.log(sum);

//other
const number = (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
console.log(number);

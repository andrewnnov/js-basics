const str = "gszidq";

let arr = str.split("");

let alpth = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

console.log(alpth.length);
let newArr = [];

for (let j = 0; j < arr.length; j++) {
  let index = alpth.indexOf(arr[j]);
  if (index !== -1) {
    if (index + 10 >= 26) {
      newArr.push(alpth[index + 10 - 26]);
    } else {
      newArr.push(alpth[index + 10]);
    }
  }
}

console.log(newArr.join(""));

//ohkwzvodocdroo;
//ohkwzvodocdrobo;

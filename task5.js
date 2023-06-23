let num = 1003567;

let array = num.toString().split("");
console.log(array);

for (let j = 0; j < array.length - 1; j++) {
  let elemF = parseInt(array[j]);
  let elemS = parseInt(array[j + 1]);
  if (elemF % 2 !== 0 && elemS % 2 !== 0) {
    array.splice(j + 1, 0, "-");
    j++;
  }
}

console.log(array);

let myArray = [14, 32, 3, 5, 5];
console.log(myArray);

myArray.sort();

console.log(myArray);

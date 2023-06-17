const first = [1, 2, 3];
const second = [5, 6, 7];

const combined = first.concat(second);
console.log(combined);

const sliced = combined.slice(2);
console.log(sliced);

const third = [{ id: 1 }];

const combined2 = third.concat(second);
third[0].id = 10;
console.log(combined2);

const ar1 = [1, 2, 3];
const ar2 = [4, 5, 6];

const combined3 = [...ar1, "a", ...ar2, "b"];

//copy all elements
const copy = [...combined3];

for (let number of ar1) {
  console.log(number);
}

ar1.forEach((number, index) => console.log(index, number));

const arrayForJoin = [8, 9, 10];
const joined = arrayForJoin.join(",");
console.log(joined);

//split
const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

const combinedArray = parts.join("-");
console.log(combinedArray);

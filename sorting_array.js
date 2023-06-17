const numbers = [2, 3, 1];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

courses.sort(function (a, b) {
  //a < b => -1
  //a > b => 1
  // a === b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);

//testing the element of an Array

//every elements
const numbersPos = [1, 2, -1, 3];
const allPositive = numbersPos.every(function (value) {
  return value >= 0;
});

//at least one element

const atLeadtOnePositive = numbersPos.some(function (value) {
  return value >= 0;
});

console.log(allPositive);

//filtering an array
const numbersFilter = [1, 2, -1, 3];
const filtered = numbersFilter.filter((n) => n >= 0);

console.log(filtered);

//maping array
const items = filtered.map((n) => "<li>" + n + "</li>");
const html = "<ul>" + items.join(",") + "</ul>";

const itemOfNumber = filtered.map((n) => {
  return { value: n };
});

console.log(html);
console.log(itemOfNumber);

//ruducing array
const numbersReduced = [1, 2, -1, 3];
let sum = 0;
for (let n of numbersReduced) {
  sum += n;
}

console.log(sum);

//var 1
const sum1 = numbersReduced.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 - initial value for accumulator

//var 2
const sum2 = numbersReduced.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum1);

const numbers = [3, 4];
//add to end of array
numbers.push(5, 6);

numbers.unshift(1, 2);

numbers.splice(2, 0, "a", "b");

console.log(numbers);

const numbers1 = [1, 2, 3, 1, 4];
console.log(numbers1.indexOf("a"));
console.log(numbers1.lastIndexOf(1));

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course1 = courses.find(function (course) {
  return course.name === "a";
});

console.log(course1);

const course2 = courses.find((course) => course.name === "a");

console.log(course2);

//delete element

const array1 = [1, 2, 3, 4];
array1.push();
array1.unshift();
array1.splice(2, 0, "a");

console.log(array1);

//end
const last = array1.pop();
console.log(array1);

//begining
array1.shift();
console.log(array1);

//midlle
array1.splice(1, 2);
console.log(array1);

//emptying an Array

let arrayNew = [1, 2, 3, 4];

arrayNew.length = 0;

console.log(arrayNew);

arrayNew.splice(0, arrayNew.length);

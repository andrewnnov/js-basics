function maxOfTwoNumber(nubmer1, nubmer2) {
  return nubmer1 > nubmer2 ? nubmer1 : nubmer2;
}

//console.log(maxOfTwoNumber(5, 15));
//console.log(maxOfTwoNumber(6, 2));

function isLandscape(width, heigth) {
  return width > heigth;
}

//console.log(isLandscape(800, 600));

//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by both 3 and 5 =>FizzBuzz
//not divisble by 3 or 5 => input
//not a number => 'Not a number'

//const output = fizzBuzz(3);
//console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";
  else if (input % 5 === 0 && input % 3 == 0) return "FizzBuzz";
  else if (input % 5 === 0) return "Buzz";
  else if (input % 3 === 0) return "Fizz";
  else return input;
}

console.log(fizzBuzz(-3));

//speed limit = 70;
// 5 - > point
//12 point - > suspended

console.log(checkSpeed(80));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) return "Ok";

  const sumOfPoint = Math.floor((speed - speedLimit) / kmPerPoint);
  return sumOfPoint >= 12 ? "suspended" : sumOfPoint;
}

showNumbers(10);
function showNumbers(limit) {
  for (let j = 0; j <= limit; j++) {
    const message = j % 2 === 0 ? "EVEN" : "ODD";
    console.log(j, message);
  }
}

console.log(countTruthy([null, "", NaN]));

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

const movie = {
  title: "a",
  releaseYear: "2018",
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let index in obj) {
    if (typeof obj[index] === "string") {
      console.log(index, obj[index]);
    }
  }
}

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let j = 0; j <= limit; j++) {
    if (j % 3 === 0 || j % 5 == 0) {
      sum += j;
    }
  }
  return sum;
}

const marks = [80, 80, 80];

console.log(calculateGrage(marks));

function calculateGrage(marks) {
  const avg = calculateAverage(marks);
  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;

  for (let value of array) {
    sum += value;
  }

  let avg = sum / array.length;
  return avg;
}

showStars(10);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

showPrimes(10);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

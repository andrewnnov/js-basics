//function declaration

// walk();
// function walk() {
//   console.log("walk");
// }

//Anonymous functions expression
// run();
// let run = function () {
//   console.log("run");
// };

// let x = 1;
// x = "a";

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

function interest(pricipal, rate = 3.5, years = 5) {
  return ((pricipal * rate) / 100) * years;
}

console.log(interest(10000));

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("Value is not a string");
    }
    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("Enter a first and last name");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person);

try {
  person.fullName = "";
} catch (e) {
  alert(e);
}

console.log(person);

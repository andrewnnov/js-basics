const objectA = {
  a: 10,
  b: true,
};

console.log(objectA);

const copyOfA = objectA;

console.log(copyOfA);

copyOfA.a = 20;
console.log(objectA);
console.log(copyOfA);

copyOfA.c = "abc";
console.log(objectA);
console.log(copyOfA);

//type of variable
let a = "abs";
a = 10;

function foo() {
  console.log("Hi");
}

foo();

// foo = 10;
// foo();

const foo1 = () => {
  console.log("Hi there");
};

foo1 = 10;

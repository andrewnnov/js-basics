//loops
//for
for (let i = 0; i < 5; i++) {
  if (i % 2) console.log("Hello", i);
}

//while loop
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

//do while
let j = 9;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

//infinit loop
let k = 0;
while (k < 5) {
  console.log(k);
  k++;
}

//for in

const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

//Dot notation
//Bracket notation

const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(colors[index]);
}

//for of loop
for (let color of colors) {
  console.log(color);
}

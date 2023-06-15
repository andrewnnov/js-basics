let a = "red";
let b = "blue";

let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

let hour = 17;

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator");
    break;
  default:
    console.log("Unknown user");
}

if (role === "guest") console.log("Guest user");
else if (role === "moderator") console.log("Moderator user");
else console.log("Unknown user");

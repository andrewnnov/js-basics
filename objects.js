//OOP

//factory function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//Constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

const circle4 = {
  radius: 1,
};

circle4.color = "yellow";

circle4.draw = function () {};

delete circle4.color;
delete circle4.draw;

console.log(circle4);

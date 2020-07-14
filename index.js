/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.stomach = [];
}

Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const newPerson = new Person("Jose", 23);

console.log(newPerson.toString());

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;

  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function (distance) {
  const gallonsTaken = distance / this.milesPerGallon;
  this.tank -= gallonsTaken;
  this.odometer += distance;

  if (this.tank <= 0) {
    this.odometer -= Math.abs(this.tank) * this.milesPerGallon;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

const newCar = new Car("Honda", 20);

newCar.fill(10);
// console.log(newCar.drive(200));
console.log(newCar.drive(250));
console.log(newCar);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
Baby.prototype = Object.create(Person.prototype);
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);

  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

Object.defineProperty(Baby.prototype, "constructor", {
  value: Baby,
  enumerable: false,
  writable: true,
});

const newBaby = new Baby("Don", 2, "Toy Car");
console.log(newBaby);

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. "Window/Global Object Binding" 
      When "this" is used in the global scope, it is set to the value of the window or the console object.
  2. "Implicit Binding"
      Whenever an object calls a method within itself, and that method uses "this". The "this" keyword is set to the value of the object that called that method.
  3. "New binding"
      During the creation of a constructor function, using "this" in the functions can apply properties and methods to the constructor functions. By using the "new" keyword to create an object with the constructor function, an instance of an object is created that uses all of the properties and methods that has been defined in the constructor function.
  4. "Explicit Binding"
      When an object is created through a constructor function, the "this" keyword from that object's instance can be overwritten using the ".call" and ".apply" methods. If there is an object named "student" that has the set property of "this.name = 'Jose'" with a method that returns that value, another object can binded to the "this" keyword in "student" with "student.returnName.call(anotherObject)". If that "student" variable now runs the method "returnName" it returns the name of the object with the variable name of "anotherObject".
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}

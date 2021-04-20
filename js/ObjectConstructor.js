// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
let myFather = new Person("John", "Doe", 50, "blue");
let myMother = new Person("Sally", "Rally", 48, "green");

// Display age
console.log("My father is " + myFather.age + ". My mother is " + myMother.age + "."); 

// Add nationality to first object
myFather.nationality = "English";

console.log("My father is " + myFather.nationality + ".");

// Add a name method to first object
myFather.name = function() {
  return this.firstName + " " + this.lastName;
};

console.log("My father is " + myFather.name());

// Constructor function for Person objects
function Person1(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function() {
    return this.firstName + " " + this.lastName
  };
}

// Create a Person object
var myFather = new Person1("John", "Doe", 50, "blue");

console.log("My father is " + myFather.name());




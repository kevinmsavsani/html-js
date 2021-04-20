var x = function (a, b) {return a * b};

console.log(x(2,3));

var myFunction = new Function("a", "b", "return a * b");
console.log(myFunction(2,3));

const x = (x, y) => x * y;
console.log(x(5,5));

// default value

function myFunction1(x, y = 2) {
  return x * y;
}

console.log(myFunction1(4));

//  Argument

function findMax() {
  var i;
  var max = -Infinity;
  for(i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
console.log(findMax(4, 5, 6));


// Invoking a Function as a Function

console.log(myFunction(2,3));

// Invoking a Function as a Method
var myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
console.log(myObject.fullName()); 

// Invoking a Function with a Function Constructor
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

var x = new myFunction("John", "Doe");
console.log(x.firstName);

//  ll Functions are Methods
var person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(person.fullName());

//  The JavaScript call() Method

var person1 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(person.fullName.call(person1)); 


// The JavaScript apply() Method

console.log(person.fullName.apply(person1));

var person1 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

console.log(Math.max.apply(Math, [1,2,3]));

// closure

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();
console.log(add());


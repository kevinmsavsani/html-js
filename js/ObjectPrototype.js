function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";


Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};

let myFather = new Person("John", "Doe", 50, "blue");
console.log("The nationality of my father is " + myFather.nationality); 

console.log("My father is " + myFather.name()); 
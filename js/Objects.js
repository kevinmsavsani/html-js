var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  age: 35,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(Object.entries(person));
console.log(Object.values(person));

var man = new Object();
man.firstName = "John";
man.lastName = "Doe";
man.age = 50;
man.eyeColor = "blue";
console.log(man.age);
man.age = 10;
console.log(man.age);

console.log(person.firstName + " is " + person.age + " years old.");
console.log(person["firstName"] + " is " + person["age"] + " years old.");

for (x in person) {
  console.log(person[x]);
}

person.nationality = "English";
delete person.age;

for (x in person) {
  console.log(person[x]);
}

console.log(person.fullName());

var message = "Hello world!";
var x = message.toUpperCase();
console.log(x);

person.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person.name());

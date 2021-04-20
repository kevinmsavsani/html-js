// We can display the Object Properties by name
// We can display the Object Properties in a Loop
// We can display the Object using Object.values()
// We can display the Object using JSON.stringify()

const person = {name:"John", age:30, city:"New York"};

console.log(person.name);


for (x in person) {
txt += person[x] + " ";
};

console.log(txt);

const myArray = Object.values(person);
console.log(myArray);

const myString = JSON.stringify(person);
console.log(myString);
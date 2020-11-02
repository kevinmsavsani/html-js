var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
var firstIndex = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);
console.log(firstIndex);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));
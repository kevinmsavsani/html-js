var text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);

console.log(obj.employees[1].firstName);
console.log(obj.employees[1].lastName);

var myObj = { name: "John", age: 31, city: "New York" };
var myJSON = JSON.stringify(myObj);
console.log(myJSON);

var person = { name: "John", age: 31, city: "New York" };
console.log(person.name);
console.log(person["name"]);
person.name = "Gilbert";
console.log(person.name);
person["name"] = "Gilbert";
console.log(person.name);

var text =
  '{ "name":"John", "birth":"1986-12-14", "city":"New York", "age":"function() {return 30;}"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(obj.name);
console.log(obj.birth);

obj.age = eval("(" + obj.age + ")");
console.log(obj.age());

var obj1 = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
obj.age = obj.age.toString();
var myJSON = JSON.stringify(obj1);
console.log(myJSON);

myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
for (x in myObj) {
  console.log(x);
}

for (x in myObj) {
  console.log(myObj[x]);
}

console.log(myObj.cars.car2);
console.log(myObj.cars["car2"]);

myObj.cars.car2 = "Mercedes";
console.log(myObj.cars.car2);

myObj.cars["car2"] = "Mercedes";
console.log(myObj.cars.car2);

delete myObj.cars.car2;
console.log(myObj.cars.car2);


var objt, x;
objt = {
  "name":"John",
  "age":30,
  "cars": [
    {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
    {"name":"BMW", "models":["320", "X3", "X5"]},
    {"name":"Fiat", "models":["500", "Panda"] }
  ]
};
x = objt.cars[0];
console.log(x);

for (i in objt.cars) {
    console.log(objt.cars[i]);
}

for (i = 0; i < objt.cars.length; i++) {
    console.log(objt.cars[i]);
}

for (i in objt.cars) {
    console.log(objt.cars[i].name);
    for (j in objt.cars[i].models) {
        console.log(objt.cars[i].models[j]);
    }
  }

  myObj.cars[1] = "Mercedes";
console.log(myObj.cars[1]);
  delete myObj.cars[1];
console.log(myObj.cars[1]);

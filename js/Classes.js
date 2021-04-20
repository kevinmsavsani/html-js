class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
    age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }

  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }

   static hello() {
    return "Hello!!";
  }

  static hello(x) {
    return "Hello " + x.name;
  }
}
  
  myCar = new Car("Ford", 2014);

  console.log(myCar.name);
  console.log(myCar.year);


console.log("My car is " + myCar.age() + " years old.");

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show);


let myCar = new Car("Ford");
console.log(myCar.cnam);

console.log(Car.hello());
console.log(Car.hello(myCar));

const person ={ 
	name:'Kevin Savsani', 
	age:'22', 
	isPlaced:true
}; 

console.log(person.name);
person.name = 'Mayank'; 

console.log(person.name);


let name = 'Kevin'; 
console.log(name);
  
name = 'Margav'; 
console.log(name);

const printName = name =>{ 
	return `Hi ${name}`;
} 
console.log(printName('Kevin'));

const printName1 = name => `Hi ${name}`; 

console.log(printName1('Margav')); 

const college = { 
    collegeName : 'IIT', 
    established : '1994', 
    isPrivate : false
}; 
  
let{collegeName,established,isPrivate} = college; 
  
console.log(collegeName);  
console.log(established); 
console.log(isPrivate);

const arr = ['lionel','messi','barcelona']; 
  
let[value1,value2,value3] = arr; 
  
console.log(value1); 
console.log(value2);
console.log(value3);

function fun(a,b=1){ 
    return a + b; 
} 
  
console.log(fun(2,1));
console.log(fun(2));

class Vehicle{ 
    constructor(name,engine){ 
        this.name = name; 
        this.engine = engine; 
    } 
} 
  
const bike1 = new Vehicle('Ninja ZX-10R','998cc'); 
const bike2 = new Vehicle('Duke','390cc'); 
  
console.log(bike1.name);
console.log(bike2.name);

function fun(...input){ 
    let sum = 0; 
    for(let i of input){ 
        sum+=i; 
    } 
    return sum; 
} 
  
console.log(fun(1,2));
console.log(fun(1,2,3));
console.log(fun(1,2,3,4,5));

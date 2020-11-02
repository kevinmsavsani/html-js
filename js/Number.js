var x = Number.EPSILON;
console.log(x);

var y = Number.MIN_SAFE_INTEGER;
console.log(y);

var z = Number.MAX_SAFE_INTEGER;
console.log(z);

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));
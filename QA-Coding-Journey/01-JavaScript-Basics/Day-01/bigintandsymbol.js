// Bigint
let num1 = 1234567890123456789012345678901234567890n;
let num2 = 9876543210987654321098765432109876543210n;
let sum = num1 + num2;
console.log(sum);

let difference = num2 - num1;
console.log(difference);

let product = num1 * num2;
console.log(product);

let quotient = num2 / num1;
console.log(quotient);

let remainder = num2 % num1;
console.log(remainder);

let power = num1 ** 2n;
console.log(power);

console.log(Number(num1)); // Converts BigInt to Number
console.log(Number(num2)); // Converts BigInt to Number

let bigIntFromString = BigInt("1234567890123456789012345678901234567890");
console.log(bigIntFromString);

// Symbol
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1);
console.log(sym2);

console.log(sym1 === sym2); // false, each Symbol is unique

let sym3 = Symbol.for("shared");
let sym4 = Symbol.for("shared");
console.log(sym3 === sym4); // true, Symbols created with Symbol.for() are shared

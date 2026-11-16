// Number
// Number is a primitive data type in JavaScript that represents numeric values. 
// It can be an integer or a floating-point number. 
// JavaScript uses the IEEE 754 standard for representing numbers, which means that all numbers are stored as 64-bit floating-point values.

// Example of a number
let integerNumber = 42; // Integer
let floatingPointNumber = 3.14; // Floating-point number

// You can perform various arithmetic operations with numbers in JavaScript:
let sum = integerNumber + floatingPointNumber;
let difference = integerNumber - floatingPointNumber;
let product = integerNumber * floatingPointNumber;
let quotient = integerNumber / floatingPointNumber;

// You can also use the Math object to perform more complex mathematical operations:
let squareRoot = Math.sqrt(integerNumber);

// JavaScript also has special numeric values like Infinity, -Infinity, and NaN (Not-a-Number):
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

// You can check if a value is NaN using the isNaN() function:
let value = "Hello";
if (isNaN(value)) {
    console.log(`${value} is not a number.`);
}

// You can also check if a value is finite using the isFinite() function:
let finiteValue = 100;
if (isFinite(finiteValue)) {
    console.log(`${finiteValue} is a finite number.`);
}

// sum of two floating point numbers
let num1 = 0.1;
let num2 = 0.2;
let sumOfFloats = num1 + num2;
console.log(`Sum of ${num1} and ${num2} is: ${sumOfFloats}`); // Output: 0.30000000000000004

// To handle floating-point precision issues, you can use the toFixed() method to round the result to a specific number of decimal places:
let roundedSum = sumOfFloats.toFixed(2);
console.log(`Rounded sum: ${roundedSum}`); // Output: 0.30

// check 0.1 +0.2 is equal to 0.3
if (parseFloat(sumOfFloats) === 0.3) {
    console.log("0.1 + 0.2 is equal to 0.3");
} else {
    console.log("0.1 + 0.2 is NOT equal to 0.3");
}

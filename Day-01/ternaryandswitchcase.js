// Ternary Operator and Switch Case
let age = 20;
let isAdult = age >= 18 ? true : false;
console.log(isAdult); // Output: true

let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName); // Output: Wednesday

// Ternary Operator with a function
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4)); // Output: Even
console.log(checkEvenOdd(7)); // Output: Odd

// Switch Case with a function
function getMonthName(month) {
    let monthName;
    switch (month) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        default:
            monthName = "Invalid month";
    }
    return monthName;
}
console.log(getMonthName(1)); // Output: January
console.log(getMonthName(4)); // Output: Invalid month

// Ternary Operator with multiple conditions
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(grade); // Output: B

// Switch Case with multiple cases
// Switch case with multiple cases are handled by using the same block of code for multiple cases. For example,
//  if we want to check if a fruit is either an apple or a banana, we can use the following code:
let fruit = "Apple";
switch (fruit) {
    case "Apple":
    case "Banana":
        console.log("It's a tropical fruit");
        break;
    default:
        console.log("It's not a tropical fruit");
}

// Ternary Operator with a boolean value
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Welcome back!

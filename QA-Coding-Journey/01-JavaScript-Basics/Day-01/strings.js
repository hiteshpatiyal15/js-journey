//Strings
let testName = "Login test Automation";

// find the string lenght
console.log(testName.length);
// convert to uppercase
console.log(testName.toUpperCase());
// convert to lowercase
console.log(testName.toLowerCase());
// check whether it contains "Login"
console.log(testName.includes("Login"));
// replace "Login " with 'Logout
console.log(testName.replace("Login", "Logout"));
const endIndex = testName.indexOf("n") + 1;
const replace = "Logout" + testName.substring(endIndex)
console.log(replace);
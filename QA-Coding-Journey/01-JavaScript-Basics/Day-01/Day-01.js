//variables
let name = "Rahul";
let age = 28;
let email = "rahul@gmail.com";
let isActive = true;

console.log(`Name:  ${ name }`);
console.log(`Age:  ${ age }`);
console.log(`Email:  ${ email }`);
console.log(`Active:  ${ isActive }`);

console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (email));
console.log(typeof (isActive));

// Operators
let totalTests = 50;
let passedTests = 42;
let failedTests = 8;

let passPercentage = (passedTests /totalTests) * 100;
let failPercentage = (failedTests / totalTests) * 100;
let totalTestsResult = passedTests + failedTests;

console.log(`Pass Percentage:  ${passPercentage}% `);
console.log(`Fail Percentage:  ${ failPercentage }% `);
console.log(`Total Tests:  ${totalTestsResult} `);

// if/else
let statusCode = 2022;
if (statusCode === 200) {
    console.log("API Passed");
} else if (statusCode === 201) {
    console.log("API Created");
}else if (statusCode === 400) {
    console.log("Bad Request");
}else if (statusCode === 401) {
    console.log("Unauthorized");
}else if (statusCode === 404) {
    console.log("Not Found");
}else if (statusCode === 500) {
    console.log("Server Error");
} else {
    console.log("Unknown Status Code")
}

// Logical Operators
// let username = "adminn";
let username = "admin";
let password = "admin123";
let isAccountActive = true;

if ((username === "admin") && (password === "admin123") && (isAccountActive === true)) {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

// Functions
const addition = function calculatePercentage(passed, total) {
    return passed + total;
}
console.log(addition(75, 100));
console.log(addition(32, 40));
console.log(addition(18, 25));

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

// Arrays
let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
// print all browsers
for (let browser of browsers) {
    console.log(browser);
}
// Print the first browser
console.log(browsers[0]);
// print the last browser
console.log(browsers[browsers.length - 1]);
// add "Opera"
browsers.push("Opera")
console.log(browsers);
// remove "Firefox"
browsers.splice(1, 1);
console.log(browsers);
//remove the first element
browsers.shift();
console.log(browsers);
// remove the last element
browsers.pop();
console.log(browsers);

// QA Automaiton logic
let testResults = ["PASS", "PASS", "FAIL", "PASS", "FAIL", "PASS"];
// calculate total tests, passed, failed and pass percentage
// calculate total tests count
const totalTestsCount = testResults.length;

// calculate passed and failed count
let passedCount = 0;
let failedCount = 0;
let invalidResult;
for (let result of testResults) {
    if (result === 'PASS') {
        passedCount++;
    } else if (result==='FAIL') {
        failedCount++;
    } else {
        invalidResult++;
    }
}

// calculate pass percentage
const passPercentageResult = +((passedCount / totalTestsCount) * 100).toFixed(2);

// output 
console.log(`Total Tests: ${totalTestsCount}`);
console.log(`Passed:  ${passedCount}\nFailed: ${failedCount}`);
console.log(`Pass Percentage: ${passPercentageResult}%`);
console.log(typeof(passPercentageResult));








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
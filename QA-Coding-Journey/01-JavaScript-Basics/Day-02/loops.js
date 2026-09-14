// Loops +  Array methods
// For loops
const testCases = [
    "Login Test",
    "Logout Test",
    "Search Test",
    "Add to Card Test",
    "Checkout Test"
];
// executing test cases 
for (let testCase of testCases) {
    console.log(`Executing: ${testCase}`);
}
let count = 1;
for (let testCase of testCases) {
    console.log(`Test ${count}: ${testCase}`);
    count++
}

// Find failed tests
const results = [
    "PASS",
    "PASS",
    "FAIL",
    "PASS",
    "PASS",
    "FAIL",
];

//count the test cases passed, failed and totals
let failCount = 0;
let passCount = 0;
let totalCases = 0;
for (let result of results) {
    if (result === "FAIL") {
        failCount++;
        totalCases++
    } else if(result === "PASS"){
        passCount++;
        totalCases++
    } 
}

console.log(`Total Tests: ${totalCases}`);
console.log(`Passed Tests: ${passCount}`);
console.log(`Failed Tests: ${failCount}`);

// print the failed test numbers
let testCount = 1;

for (let result of results) {
    if (result != "PASS")
        console.log(`Failed Test: ${testCount}`);
    testCount++;
}

const browsers = ["Chrome", "Firefox", "Edge", "Safari"];
for (let browser of browsers) {
    console.log(`Running tests on ${browser}`);
}
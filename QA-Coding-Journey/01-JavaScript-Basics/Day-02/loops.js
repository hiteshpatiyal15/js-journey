// Loops +  Array methods
// For loops
const testCases = [
    "Login Test",
    "Logout Test",
    "Search Test",
    "Add to Card Test",
    "Checkout Test"
];
// For of loop
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

// For in loop
const testCaseDetails = {
    name: "Login Test",
    status: "PASS",
    executionTime: "5s"
};

for (let key in testCaseDetails) {
    console.log(`${key}: ${testCaseDetails[key]}`);
}

const testCaseResults = {
    test1: "PASS",
    test2: "FAIL",
    test3: "PASS",
    test4: "FAIL"
};

for (let test in testCaseResults) {
    if (testCaseResults[test] === "FAIL") {
        console.log(`Failed Test: ${test}`);
    }
}

for (let test in testCaseResults) {
    if (testCaseResults[test] === "PASS") {
        console.log(`Passed Test: ${test}`);
    }
}
let passedTests = 0;
let failedTests = 0;
for (let test in testCaseResults) {
    if (testCaseResults[test] === "PASS") {
        passedTests++;
    } else {
        failedTests++;
    }
}
console.log(`Passed Tests: ${passedTests}`);
console.log(`Failed Tests: ${failedTests}`);

// Name of passed and failed tests with their count
let passedTestNames = [];
let failedTestNames = [];
for (let test in testCaseResults) {
    if (testCaseResults[test] === "PASS") {
        passedTestNames.push(test);
    } else {
        failedTestNames.push(test);
    }
}
console.log(`Passed Tests: ${passedTestNames.join(", ")}`);
console.log(`Failed Tests: ${failedTestNames.join(", ")}`);
console.log(`Total Passed Tests: ${passedTestNames.length}`);
console.log(`Total Failed Tests: ${failedTestNames.length}`);

// forEach loop
const testCaseList = [
    "Login Test",
    "Logout Test",
    "Search Test",
    "Add to Card Test",
    "Checkout Test"
];

testCaseList.forEach((testCase, index) => {
    console.log(`Test ${index + 1}: ${testCase}`);
});

testCaseList.forEach((testCase) => {
    if (testCase.includes("Login")) {
        console.log(`Executing: ${testCase}`);
    }
});

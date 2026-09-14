// **************************************Loops +  Array methods**************************************
// -------------------------------------------For loop------------------------------------------
// *****************************************Run Test Cases*********************************
const testCases = [
    "Login Test",
    "Logout Test",
    "Search Test",
    "Add to Card Test",
    "Checkout Test"
];

console.log(`${"*".repeat(10)}Use a for loop to print:${"*".repeat(10)}`);
for (let i = 0; i < testCases.length; i++) {
    console.log(`Executing: ${testCases[i]}`);
}

console.log(`${"*".repeat(10)}Print the Test Number${"*".repeat(10)}`);
for (let i = 0; i < testCases.length; i++) {
    console.log(`Test ${i+1}: ${testCases[i]}`);
}

// *****************************************Find Failed Tests*********************************
const results = [
    "PASS",
    "PASS",
    "FAIL",
    "PASS",
    "PASS",
    "FAIL",
];

console.log(`${"*".repeat(10)}Use a for loop to count test cases${"*".repeat(10)}`);
let failCount = 0;
let passCount = 0;
for (let i = 0; i < results.length; i++){
    if (results[i] === "PASS") {
        passCount++;
    } else {
        failCount++;
    }
}
console.log(`Total Tests: ${results.length}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);

console.log(`${"*".repeat(10)}Print the failed test numbers${"*".repeat(10)}`);
for (let i = 0; i < results.length; i++) {
    if (results[i] != "PASS")
        console.log(`Failed Test: ${i+1}`);
}

// -------------------------------------------For...of loop------------------------------------------
const browsers = [
    "Chrome",
    "Firefox",
    "Edge",
    "Safari"
];

// *****************************************Use for...of to print*********************************
console.log(`${"*".repeat(10)}Use for...of to print browser name${"*".repeat(10)}`);
for (let browser of browsers) {
    console.log(`Running tests on: ${browser}`);
}

// *****************************************Use for...of to break the execution when encounter 500 statuscode*********************************
const statusCode = [200, 200, 200, 500, 200, 200];

console.log(`${"*".repeat(10)}Use for...of to break the execution when encounter 500 statuscode${"*".repeat(10)}`);
for (let code of statusCode) {
    if (code !== 200) {
        console.log("Server Error found!");
        console.log("Stopping test execution...");
        break;
    }    
}

// *****************************************Use for...of to Print only the tests that actually executed*********************************
const testResults = [
    "PASS",
    "SKIPPED",
    "PASS",
    "FAIL",
    "SKIPPED",
    "PASS"
];
console.log(`${"*".repeat(10)}Use for...of to  Print only the tests that actually executed${"*".repeat(10)}`);
for (let result of testResults) {
    if (result !== "PASS" && result !== "FAIL") {
        continue;
    }
    console.log(result);
}

// *****************************************Use push method to add test cases into array*********************************
let addTestCases = [];
console.log(`${"*".repeat(10)}Add some test cases using push() and print total test cases${"*".repeat(10)}`); //Login, Logout, Search, Checkout, Payment
addTestCases.push("Login");
addTestCases.push("Logout");
addTestCases.push("Search");
addTestCases.push("Checkout");
addTestCases.push("Payment");
console.log(addTestCases);
console.log(`Total Test Cases: ${addTestCases.length}`);
addTestCases.push("Profile Update");
console.log(addTestCases);

// *****************************************Use includes method to check whether browser are present or not*********************************
const supportedBrowsers = ["Chrome", "Firefox", "Edge"];
const browserList = ["Chrome", "Safari", "Firefox", "Opera", "Brave"];

console.log(`${"*".repeat(10)}Includes method to check whether given browser are present in the supportedBrowser list${"*".repeat(10)}`); //Login, Logout, Search, Checkout, Payment
for (let browser of browserList) {
    if (supportedBrowsers.includes(browser)) {
        console.log(`${browser} -> Supported`);
        continue;
    }
    console.log(`${browser} -> Not Supported`);
}

// *****************************************Filter method*********************************
const tests = [
    { name: "Login", status: "PASS" },
    { name: "Search", status: "FAIL" },
    { name: "Checkout", status: "PASS" },
    { name: "Payment", status: "FAIL" },
    { name: "Logout", status: "PASS" }
];

console.log(`${"*".repeat(10)}Use filter() to create a new array containing only failed tests${"*".repeat(10)}`); //Login, Logout, Search, Checkout, Payment
const failedTestCases = tests
    .filter(test => test.status === "FAIL")
    .map(test => test.name);
for (let failTest of failedTestCases) {
    console.log(failTest);
}

console.log(`${"*".repeat(10)}Using the same tests array, use map() to create${"*".repeat(10)}`);
const testResult = tests.map(test => `${test.name} - ${test.status}`);
console.log(testResult);

const findTest = tests.find(test => test.name === "Checkout");
console.log(findTest);


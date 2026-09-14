const tests = [
    { name: "Login", status: "PASS" },
    { name: "Search", status: "FAIL" },
    { name: "Add to Cart", status: "PASS" },
    { name: "Checkout", status: "FAIL" },
    { name: "Payment", status: "PASS" },
    { name: "Logout", status: "PASS" }
];

// 1. Filter tests based on status
const passedTests  = tests.filter(test => test.status === "PASS");
const failedTests  = tests.filter(test => test.status === "FAIL");

// 2. Perform metrics calculations
const totalTests = tests.length;
const passedCount = passedTests.length;
const failedCount = failedTests.length;

const passPercentage = ((passedCount / totalTests) * 100).toFixed(2);
const failPercentage = ((failedCount / totalTests) * 100).toFixed(2);

// 3. Extract the names of the tests for the lists
const failedNames = failedTests.map(test => test.name).join("\n");
const passedNames = passedTests.map(test => test.name).join("\n");

// 4. Construct and log the final report format
const report = `${"=".repeat(10)} TEST EXECUTION REPORT ${"=".repeat(10)}

Total Tests: ${totalTests}
Passed: ${passedCount}
Failed: ${failedCount}
Pass Percentage: ${passPercentage}%
Fail Percentage: ${failPercentage}%

---------- Failed Tests ----------
${failedNames}

---------- Passed Tests ----------
${passedNames}

${"=".repeat(45)}`; // Makes the bottom match the top length perfectly

console.log(report);


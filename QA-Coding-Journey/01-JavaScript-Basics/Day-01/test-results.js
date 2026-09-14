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
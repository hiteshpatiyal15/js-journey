const statusCode = [200, 200, 200, 500, 200, 200];
for (let status of statusCode) {
    if (status === 500) {
        console.log("Server Error found!\nStopping test execution");
        break;
    }
}

const testResults = [
    "PASS",
    "SKIPPED",
    "PASS",
    "FAIL",
    "SKIPPED",
    "PASS"
]

for (let result of testResults) {
    if (result==="SKIPPED") {
        continue
    }console.log(result);
}
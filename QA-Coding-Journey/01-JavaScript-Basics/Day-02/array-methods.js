// push
let testCases = [];
console.log(`Empty array: ${testCases}`);
testCases.push("Login", "Logout", "Search", "Checkout", "Payment");
console.log(`Adding elements to empty array: ${testCases}`);
console.log(`Total Test Cases: ${testCases.length}`);

//pop 
console.log(`Original element: ${testCases}`);
testCases.pop();
console.log(`Remove last element: ${testCases}`);

// toString
let arrayToString = testCases.toString();
console.log(`Convert array to string: ${arrayToString}`);

//concate
let newTestCases = ["Add to Cart", "My Orders", "MyAccount"];
let regressTestCases = testCases.concat(newTestCases)
console.log(`Concate another array: ${regressTestCases}`);

// unshift
testCases.unshift("Forgot Password");
console.log(`Add new element to start: ${testCases}`);

//shift 
testCases.shift();
console.log(`Deleted element from start: ${testCases}`);

// includes
const supportedBrowsers = [
    "Chrome",
    "Firefox",
    "Edge"
];

const browsers = ["Chrome", "Safari", "Firefox"];
console.log(`Checking browser supported ${browsers}`);
for(let browser of browsers){
    if (supportedBrowsers.includes(browser)) {
        console.log(`${browser} -> Supported`);
    } else {
        console.log(`${browser} -> Not Supported`);
    }
}

// slice
let testCaseId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copyArray = testCaseId.slice(0, 7);
console.log(copyArray);

//splice
console.log(`Original array: ${testCaseId}`);

//Add element
testCaseId.splice(1, 0, 101);
console.log(`Added new element at index 1: ${testCaseId}`);

//Remove element
testCaseId.splice(1, 1);
console.log(`Delete element from index 1: ${testCaseId}`);

//Add series of element
testCaseId.splice(2, 0, 101, 102)
console.log(`Added new series of element: ${testCaseId}`);

// Replace element
testCaseId.splice(2, 2, 103, 104);
console.log(`Replace element from index 2 to 3: ${testCaseId}`);


// Fliters
const tests = [
    { name: "Login", status: "PASS" },
    { name: "Search", status: "FAIL" },
    { name: "Checkout", status: "PASS" },
    { name: "Payment", status: "FAIL" },
    { name: "Logout", status: "PASS" }
];


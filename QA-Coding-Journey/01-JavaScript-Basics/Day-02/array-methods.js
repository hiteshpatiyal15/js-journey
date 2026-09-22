// push
let testCases = [];
console.log(`Empty array: ${testCases}`);
testCases.push("Login", "Logout", "Search", "Checkout", "Payment");
console.log(`Adding elements to empty array: ${testCases}`);
console.log(`Total Test Cases: ${testCases.length}`);

//pop 
console.log(`"${"*".repeat(10)}"`);
console.log(`Original element: ${testCases}`);
testCases.pop();
console.log(`Remove last element: ${testCases}`);

// reverse 
console.log(`"${"*".repeat(10)}"`);
console.log(`Original element: ${testCases}`);
testCases.reverse();
console.log(`Reverse the array: ${testCases}`);

//shift 
console.log(`"${"*".repeat(10)}"`);
testCases.shift();
console.log(`Deleted element from start: ${testCases}`);

// unshift
console.log(`"${"*".repeat(10)}"`);
testCases.unshift("Forgot Password");
console.log(`Add new element to start: ${testCases}`);

// join
console.log(`"${"*".repeat(10)}"`);
let joinedTestCases = testCases.join(", ");
console.log(`Join the array elements: ${joinedTestCases}`);

//sort
console.log(`"${"*".repeat(10)}"`);
console.log(`Original array: ${testCases}`);
testCases.sort();
console.log(`Sort the array elements by lexical order: ${testCases}`);

// Sort by alphabetically
console.log(`"${"*".repeat(10)}"`);
let testCaseNames2 = ["Login", "Logout", "Search", "Checkout", "Payment"];
console.log(`Original array: ${testCaseNames2}`);
testCaseNames2.sort((a, b) => a.localeCompare(b));
console.log(`Sorted array alphabetically: ${testCaseNames2}`);

// toString
console.log(`"${"*".repeat(10)}"`);
let arrayToString = testCases.toString();
console.log(`Convert array to string: ${arrayToString}`);

//concate
console.log(`"${"*".repeat(10)}"`);
let newTestCases = ["Add to Cart", "My Orders", "MyAccount"];
let regressTestCases = testCases.concat(newTestCases)
console.log(`Concate another array: ${regressTestCases}`);

// includes
console.log(`"${"*".repeat(10)}"`);
const supportedBrowsers = [
    "Chrome",
    "Firefox",
    "Edge"
];

const browsers = ["Chrome", "Safari", "Firefox"];
console.log(`Checking browser supported ${browsers}`);
for (let browser of browsers) {
    if (supportedBrowsers.includes(browser)) {
        console.log(`${browser} -> Supported`);
    } else {
        console.log(`${browser} -> Not Supported`);
    }
}

// slice
console.log(`"${"*".repeat(10)}"`);
let testCaseId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copyArray = testCaseId.slice(0, 7);
console.log(copyArray);

//splice
console.log(`"${"*".repeat(10)}"`);
console.log(`Original array: ${testCaseId}`);

//Add element
console.log(`"${"*".repeat(10)}"`);
testCaseId.splice(1, 0, 101);
console.log(`Added new element at index 1: ${testCaseId}`);

//Remove element
console.log(`"${"*".repeat(10)}"`);
testCaseId.splice(1, 1);
console.log(`Delete element from index 1: ${testCaseId}`);

//Add series of element
console.log(`"${"*".repeat(10)}"`);
testCaseId.splice(2, 0, 101, 102)
console.log(`Added new series of element: ${testCaseId}`);

// Replace element
console.log(`"${"*".repeat(10)}"`);
testCaseId.splice(2, 2, 103, 104);
console.log(`Replace element from index 2 to 3: ${testCaseId}`);

// Map
console.log(`"${"*".repeat(10)}"`);
let doubledValues = testCaseId.map(x => x * 2);
console.log(`Doubled values: ${doubledValues}`);

let mappedValues = testCaseId.map((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});
console.log(`Mapped values: ${mappedValues}`);

// Find it is used to find the first element in the array that satisfies the provided testing function. 
// It returns the value of the first element that passes the test, or undefined if no elements pass the test.
console.log(`"${"*".repeat(10)}"`);
const foundValue = testCaseId.find(x => x > 5);
console.log(`Found value: ${foundValue}`);


// Filters is used to create a new array with all elements that pass the test implemented by the provided function.
console.log(`"${"*".repeat(10)}"`);
const filteredValues = testCaseId.filter(x => x > 5);
console.log(`Filtered values: ${filteredValues}`);

console.log(`"${"*".repeat(10)}"`);
const tests = [
    { name: "Login", status: "PASS" },
    { name: "Search", status: "FAIL" },
    { name: "Checkout", status: "PASS" },
    { name: "Payment", status: "FAIL" },
    { name: "Logout", status: "PASS" }
];

//Find index is used to find the index of the first element in the array that satisfies the provided testing function.
const index = tests.findIndex(test => test.status === "FAIL");
console.log(`Index of first failed test: ${index}`);

const data = [10, 20, 30, 40, 50];
console.log(data);

const result = data.map(function (number) {
    return number * 2;
})
console.log(result);

const result1 = data.map(number => number + 10);
console.log(result1);

data.forEach(function (number, count) {
    console.log(`Number ${count+1} : ${number}`);
})

data.forEach(value => console.log(value))

//Filter
const numbers = [12, 87, 292, 2719, 11];
const result2 = numbers.filter(number => number >= 100);
console.log(result2);

// find
const userdata = [{ "age": 29, "Name": "Hitesh", "profession": "QA Engineer" },
    { "age": 30, "Name": "Aditya", "profession": "Site Engineer" },
    { "age": 31, "Name": "Hitesh", "profession": "Merchant navy officer" }
]

const getUserDetails = userdata.find(value => value.age === 30);
console.log(getUserDetails);





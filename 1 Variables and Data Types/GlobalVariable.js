let globalVar1 = 5;
var globalVar2 = 8;
const globalVar3 = 1;

// Accessing a Global Variable from Multiple Functions
let myVal = 15;
function addOne() {
    myVal = myVal + 1;
}

function print(val) {
    console.log("value is: " + myVal);
}

addOne();
print();

// Modifying a Global Variable
var appName = "MyJS";
console.log("Initial app name: ", appName);
var appName = "OtherApp";
console.log("New app name: ", appName);

    
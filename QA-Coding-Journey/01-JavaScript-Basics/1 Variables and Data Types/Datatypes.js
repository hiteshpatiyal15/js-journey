//1. Number
let a = 12;
console.log(a);
let b = 11.5;
console.log(b);
let c = Infinity;
console.log(c);
let d = 'something here too' / 2;
console.log(d);

//2. String
let str1 = "double quotes work fine";
console.log(str1);

let str2 = "Single quotes work fine";
console.log(str2);

let str3 = `can embed ${str1}`;
console.log(str3);

//3. Boolean
let p = true;
console.log(p);
let q = false;
console.log(q);

// Undefined
let x;
console.log(x);

// Null
let age = null;
console.log(age);

//Non primitive data types
//1. Object
let myObj = {
    type: "company",
    location: "mumbai"
}
console.log(myObj.type);
console.log(myObj.location);

//2. Arrays
let arr1 = [1, 2, 3, 4, 5]
console.log(arr1);
let arr2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(arr2);

//3. Function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Hitesh"));

//4. Date Object
let currentDate = new Date();
console.log(currentDate);

    
 













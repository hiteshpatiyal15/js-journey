// 2nd way to create objec
let myObj = new Object()
console.log(myObj);

myObj.name = 'Hitesh'
myObj.age = 29
myObj.numbers = [15, 10, 19, 96]
myObj.address = 'Thane west, Maharashtra, India'
myObj.height = 5.9
console.log(myObj);
myObj.name = 'Kartik'
console.log(myObj)

delete myObj.name

console.log(myObj.name)
for (let value in myObj) {
    console.log(value, '=> ', myObj[value]);
} 
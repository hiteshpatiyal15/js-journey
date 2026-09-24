// copy of array using spread operator
const arr1 = [10, 20, 30];
const arr2 = arr1;
console.log(arr2);
console.log("Adding new element to arr1");
arr1.push(40);
console.log(arr1);
console.log(arr2); // new element added in arr1 is also get added to arr1

console.log('Creating copy with spread operator');

const arr3 = [...arr1]
console.log("Adding new element to arr1");
arr1.push(50);
console.log(arr1);
console.log(arr3); // 
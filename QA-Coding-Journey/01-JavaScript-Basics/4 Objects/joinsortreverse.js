const names = ["Yashraj", "Thomas", "Kate"]; 
console.log(names.join(`-`));

// sorting lexicography
names.sort()
console.log(names)

const numbers = [10, 2, 5, 1];  
numbers.sort((a, b) => {
    return a - b;
})
console.log(numbers);

//reverse
names.reverse();  
console.log("Reversed order:", names); 

// sorted return new array
const sortedNames = names.toSorted();  
console.log("Sorted array:", sortedNames);  
console.log("Original array:", names);  

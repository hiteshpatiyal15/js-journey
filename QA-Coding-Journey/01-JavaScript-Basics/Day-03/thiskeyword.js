// The 'this' keyword in JavaScript refers to the object that is currently executing the function.
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Output: John Doe

// In a regular function, 'this' refers to the global object (window in browsers).
function showThis() {
    console.log(this);
}
showThis();

// In strict mode, 'this' is undefined in a regular function.
"use strict";
function showThisStrict() {
    console.log(this);
}
showThisStrict(); // Output: undefined

// In an arrow function, 'this' retains the value of the enclosing lexical context's 'this'.
let arrowFunction = () => {
    console.log(this);
}
arrowFunction(); // Output: Window (or global object in Node.js)

// Example of 'this' in a class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person("Jane", "Doe");
console.log(person1.fullName()); // Output: Jane Doe

// When to use 'this':
// 1. Inside an object method to refer to the object itself.
// 2. Inside a constructor function or class to refer to the instance being created.
// 3. In arrow functions, 'this' retains the value of the enclosing lexical context's 'this'.

// This keyword inside a constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

let car1 = new Car("Toyota", "Camry");
console.log(car1.make);
console.log(car1.model);

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Car Make: ${this.make}, Model: ${this.model}`);
    }
}

let car2 = new Car("Honda", "Civic");
car2.displayInfo(); // Output: Car Make: Honda, Model: Civic

// Reading and updating properties using 'this'
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    birthday() {
        this.age++;
    }
}
let person = new Person("Alice", 30);
console.log(person.age); // Output: 30
person.birthday();
console.log(person.age); // Output: 31


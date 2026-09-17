// Object
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(obj);

// Accessing object properties
console.log(obj.name);

// Adding a new property
obj.country = "USA";
console.log(obj);

// Updating a property
obj.age = 31;
console.log(obj);

// Deleting a property
delete obj.city;
console.log(obj);

// Checking if a property exists
console.log("name" in obj);

// Iterating over object properties
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Object methods
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};
person.greet();

person.firstName = "Jane"; // Updating the firstName property
person.greet();

let person2 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    address: null, // Address is initially null
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};
person2.greet();
person2.address = "123 Main St"; // Assigning a value to the address property
console.log(`Address: ${person2.address}`); // Output: Address: 123 Main St

// Object with nested objects
let company = {
    name: "Tech Corp",
    location: {
        city: "San Francisco",
        state: "CA"
    }
};
console.log(company.name); // Output: Tech Corp
console.log(company.location.city); // Output: San Francisco
console.log(company.location.state); // Output: CA

// Object with methods and nested objects
let employee = {
    firstName: "Bob",
    lastName: "Johnson",
    position: "Software Engineer",
    department: {
        name: "Engineering",
        floor: 5
    },
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I work in the ${this.department.name} department.`);
    }
};
employee.greet();
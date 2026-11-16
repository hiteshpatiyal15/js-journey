const emp = {
    name: "Hitesh",
    age: 30,
    salary: 49000,
    designation: "SEDT",

    introduction() {
        console.log("My Name is Hitesh")
    }
}

console.log(emp);
console.log(emp.name);
console.log(emp.designation);
emp.introduction();

console.log("*".repeat(20))

const emp1 = {
    name: "Lokesh",
    age: 32,
    salary: 70000,
    designation: "SEDT",

    introduction() {
        console.log("My Name is Lokesh")
    }
}

console.log(emp1);
console.log(emp1.name);
console.log(emp1.designation);
emp1.introduction();


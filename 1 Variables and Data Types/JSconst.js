const x = 19;
console.log(x);
// x = 20; //
// console.log(x); // TypeError: Assignment to constant variable.

y = 12;
// const y; // SyntaxError: Missing initializer in const declaration

// modify the element of const array 
const nameArray = [" Aparna", " Manya", " Amayra", " Jahnavi"];
console.log(nameArray);

nameArray[1] = "Himanshu";
console.log(nameArray);

// modify the properties of const object
const employee = {
    fname: "Hitesh",
    lname: "Patiyal",
    profession: "QA Analyst",
    age: 29
}
console.log(employee);
employee.fname = "siddharth";
employee.lname = "pahariya";
employee.age = 31;
employee.profession = "Own Business"
console.log(employee);
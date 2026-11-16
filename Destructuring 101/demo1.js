// Destucturing: a way to extract the value from an array or the proprtties from an object in a simple way

// Creating a JS object
const user = {
    name: 'Hitesh',
    age: 31,
    course: "SDET master class"
}

// let name = user.name;
// let age = user.age;
// let course = user.course;

// console.log(name, age, course);

// Destructuring of the object
const { name, age, course } = user;
console.log(name, age, course);

const { userName } = user;
console.log(userName); // undefined

// Mapping the property to a  new variable
const { name: username, age: userage, course: usercourse } = user;
console.log(username);
console.log(userage);
console.log(usercourse);





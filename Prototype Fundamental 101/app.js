import { Emp } from "./Emp.js";

const emp1 = new Emp("Hitesh", 4000);
const emp2 = new Emp("Aditya", 5000);

console.log(Object.hasOwn(emp1, "name"));
console.log(Object.hasOwn(emp1, "salary"));
console.log(Object.hasOwn(emp1, "work"));

console.log(Emp.prototype);
console.log(Emp.prototype.work);
console.log(Emp.prototype.constructor === Emp);





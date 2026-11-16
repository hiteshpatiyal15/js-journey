import { Employee } from "./Employee.js";

const emp1 = new Employee("Hitesh", 3000);
console.log(emp1);
emp1.getEmployeeInfo()
emp1.showBonus()

// console.log(emp1.salary); // private property salary is not accessible
// emp1.salary = 4000; // Cannot add property salary, object is not extensible

const emp2 = new Employee("Aditya", 4000);
console.log(emp2);
emp1.getEmployeeInfo()
emp1.showBonus()


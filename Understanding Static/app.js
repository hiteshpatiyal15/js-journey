import { Tester } from "./Tester.js";
import { Employee1 } from "./Employee1.js"

const emp1 = new Tester("Hitesh", 30, 40000, "SDET", "EdTech");
console.log(emp1);

// static method calling
Tester.m1();
console.log(Tester.getCompanyInfo());

const emp2 = new Employee1("Hitesh", 40000);
emp2.getEmployeeInfo()

// static method calling
Employee1.getCompanyName()


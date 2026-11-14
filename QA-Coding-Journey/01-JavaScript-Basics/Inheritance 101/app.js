import { Tester } from "./Tester.js";
import { Developer } from "./Dev.js";
import { Employee } from "./Employee.js";

const emp1 = new Tester("Hitesh", 30, 60000, "SDET", "API Automation", "Playwright");
const emp2 = new Developer("Mahesh", 35, 130000, "Software Developer", "Mdarpan");
const emp3 = new Tester("Simbha", 38, 200000, "Project Manager", "ADI Finance");

console.log(emp1);
console.log(emp2);
console.log(emp3);
emp1.work()
emp1.demo();

console.log("-".repeat(10))
console.log(Employee.companyName);
console.log(Tester.companyName);
console.log(Employee.getCompanyName());
console.log(Tester.getCompanyName());
console.log(Tester.m2())
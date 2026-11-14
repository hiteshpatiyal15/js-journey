import { Tester } from "./Tester.js";
import { Developer } from "./Dev.js";
import { Employee } from "./Employee.js";

const emp1 = new Tester("Hitesh", 30, 40000, "SDET", "EdTech");
console.log(emp1);

Tester.m1();

console.log(Tester.getCompanyInfo());

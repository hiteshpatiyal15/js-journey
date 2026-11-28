import { Employee } from "./Employee.js";

const e1 = new Employee("Hitesh", 4000, "QA");
e1.getEmployeeInfo();

const e2 = new Employee("Lokesh", 6000, "SDET");
e2.getEmployeeInfo();

e1.salary= 5000 ;
e2.salary= 7000;

e1.designation = "Senior QA";
e2.designation = "Lead SDET";

e1.name = "Hitesh Kumar";
e2.name="Lokesh Sharma";

e1.getEmployeeInfo();
e2.getEmployeeInfo();

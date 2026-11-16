import { Employee } from "./Employee.js"
class Tester extends Employee{
    name;
    tools;

    static getCompanyName() {
        return `Tester is working for the company ${this.companyName}`
    }

    static m2() {
        console.log(super.m2());
        return `Tester m2 method`;
    }

    constructor(name, age, salary, designation, project, tools, x) {
        super(name, age, salary, designation, project);
        this.tools = tools
        this.name = x;
    }

    work(){
    console.log(`In Tester Class${this.name} is testing the project ${this.project}`);
    }
    
    demo() {
        super.work();
    }
}


export {
    Tester
}
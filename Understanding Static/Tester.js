import { Employee } from "./Employee.js";

class Tester extends Employee{

    constructor(name, age, salary, designation, project) {
        super(name, age, salary, designation, project)
    }

    static getCompanyInfo() {
        return `Tester is working for company: ${this.companyName}` 
    }

    static m1() {
        super.m1()
        return `Child class method`
    }

}

export {
    Tester
}
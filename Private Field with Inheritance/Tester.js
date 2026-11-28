import { Emp } from './Emp.js';

class Tester extends Emp{

    #tools;
    constructor(name, salary, tools) {
        // we need to call parent class constructor
        super(name, salary)
        this.#tools = tools;
    }

    getInfo() {
        console.log("Name: ", this.name);
        console.log("Salary: ", this.salary);
        console.log("Tools: ", this.#tools);   
    }
    
    m2(){
    console.log("M2 method from the Tester class");
}
}

export {
    Tester
}
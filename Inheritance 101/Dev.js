import { Employee } from "./Employee.js";

class Developer extends Employee{
    // JS Automatically implicitly adds the constructor
    constructor(...args) {
       super(...args)
   }
}

export {
    Developer
}
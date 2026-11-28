class Employee{

    #name;
    #empId;
    #salary;
    #designation;
    static #count;

    static {
        this.#count = 100;
    }

    constructor(name, salary, designation) {
        if (this.#validateEmpInfo(name, salary, designation)) {
            this.#empId = Employee.#count++;
            this.#name = name;
            this.#salary = salary;
            this.#designation = designation;
            Object.preventExtensions(this) // preventing adding of new properties outside the class
        }
    }

    #validateEmpInfo(name, salary, designation) {
        return this.#validateName(name) && this.#validateSalary(salary) && this.#validateDesignation(designation) 
    }

    set name(name) {
        if (this.#validateName) {
            this.#name = name;
        }
    }

    set salary(salary) {
        if (this.#validateSalary) {
            this.#salary = salary;
        }
    }

    #validateName(name) {
        if (typeof name === 'string' && typeof name != 'number') {
            return true;
        } else {
            throw new Error("Invalid name! name should be a string");
        }
    }
    #validateSalary(salary) {
        if (salary > 0 && typeof salary === 'number') {
            return true;
        } else {
            throw new Error("Invalid salary! salary should be greater than 0 and a number");
        }
    }

    #validateDesignation(designation) {
         if (typeof designation === 'string') {
             return true;
        } else {
            throw new Error("Invalid designation! designation should be a string");
        }
    }
    get salary() {
        return this.#salary;
    }

    get name() {
        return this.#name;
    }

    set designation(designation) {
        if (this.#validateDesignation) {
           this.#designation = designation;
       }
    }

    get designation() {
        return this.#designation;
    }

    getEmployeeInfo() {
        console.log("*".repeat(20), "Employee Info".toUpperCase(), "-".repeat(10));
        console.log("Employee name= ".toUpperCase(),this.#name);
        console.log("Employee empid= ".toUpperCase(), this.#empId);
        console.log("Employee salary= ".toUpperCase(), this.#salary);
        console.log("Employee designation= ".toUpperCase(),this.#designation);
    }

}
Object.preventExtensions(Employee);

export {
    Employee
}
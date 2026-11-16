class Employee{

    name;
    #salary;
    static #count

    static {
        this.#count = 100;
    }

    constructor(name, salary) {
        this.name = name;
        this.empId = Employee.#count++;
        if (this.#validateSalary(salary)) {
            this.#salary = salary;
        }      
        Object.preventExtensions(this)
    }

    getEmployeeInfo() {
        console.log("*".repeat(30));
        console.log(`Employee Info--------`.toUpperCase());
        console.log('Employee id: '.toUpperCase(), Employee.#count);
        console.log('Employee name: '.toUpperCase(), this.name);
        console.log('Employee salary: '.toUpperCase(), this.#salary); 
        console.log("*".repeat(30));
    }

    #validateSalary(salary) {
        if (salary > 0 && typeof salary === "number") {
            return true;
        } else {
           throw new Error ("Invalid salary! salary should be >0 and should be number!")
        }
    }

    showBonus() {
        console.log('The bonus for the financial year...');
        console.log(this.#calculateBonus());
        console.log("-".repeat(30));
    }

    #calculateBonus() {
        return this.#salary * 0.1;
    }
}

export {
    Employee
}
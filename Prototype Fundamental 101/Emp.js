class Emp {
    name;
    salary;

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`Employee ${this.name} is working at DT company over salary of ${this.salary}`);
    }
}

export {
    Emp
}
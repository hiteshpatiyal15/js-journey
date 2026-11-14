 class Employee {
    name;
    age;
    salary;
    designation;
    project;
    static companyName = "QA Tech Pvt Ltd"
    constructor(name, age, salary, designation, project) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
        this.project = project;
    }

    static m1() {
        return `Parent class method`
     }
}

export {
    Employee
}
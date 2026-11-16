class Employee{
    name;
    age;
    salary;
    designation;
    project;
    static companyName = "Work Mode On"

    static getCompanyName(){
        return this.companyName
    }

    static m2() {
        return `Employee m2 method`
    }
    
    constructor(name, age, salary, designation, project) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
        this.project = project;
    }

    work(){
    console.log(`In Employee Class and ${this.name} is working on the project ${this.project}`);
}
}

export {
    Employee
}
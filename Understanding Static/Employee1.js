class Employee1{
    name;
    salary;
    static counter = 0;
    static env;

    constructor(name, salary) {
        Employee1.empid++;
        this.name = name;
        this.salary = salary;
        this.empid = Employee1.counter;
        console.log(`Env is ${Employee1.env}`);
    }

    static getCompanyName() {
        console.log("QA Tech Pvt Ltd");   
        console.log(this.env);
        
    }

    static {
        if (process.env.NODE_ENV === "prod") {
            console.log("This is static block selecting the env as prod");
            this.env = "prod"
        }
        else if (process.env.NODE_ENV === "qa") {
            console.log("This is static block selecting the env as qa");
            this.env = "qa"
        }
    }

    getEmployeeInfo() {
        console.log(`Employee info: Name is ${this.name} and salary is ${this.salary}`)
    }
}

export {
    Employee1
}
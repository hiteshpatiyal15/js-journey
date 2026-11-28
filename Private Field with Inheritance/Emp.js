class Emp{
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    get name() {
        return this.#name;
    }

    get salary() {
        return this.#salary;
    }

    m1(){
    console.log("M1 method from the Emp class");
}
}

export {
    Emp
}
import { Tester } from './Tester.js'

class Intern extends Tester{
    #collegName;
    
    constructor(name, salary, tools, collegName){
        super(name, salary, tools)
        this.#collegName = collegName;
    }

    m3(){
    console.log("M3 method from the Intern class");
}
}

export {
    Intern
}
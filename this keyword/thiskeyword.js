// this keyword
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName + " " +this.middleName;
    },
    newPerson: {
        firstName: "Samay",
        lastName: "Rau",
        person: newPerson
    }
}
 function newPerson() {
            return this.firstName+ " " + person.lastName + " " + this.lastName
        }

console.log(person.firstName);
console.log(person.fullName());
console.log(person.newPerson.person());

const student = {
    firstName: "Hemant",
    lastName: "Tekar",
    age: 20,
    studentDetails() {
        console.log(this.firstName+" "+this.lastName+" "+this.age);
    }
}



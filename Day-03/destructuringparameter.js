function printUser({ id, name }) {
    console.log(id);
    console.log(name);
}

function  printUser({ id, name }){
    console.log("This is the final function will be called");
    console.log(id);
    console.log(name);
    console.log("End of final function");
}

const user = {
    id: 20,
    name: 'Jatin'
}

printUser(user)

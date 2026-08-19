greet()

function greet(name) {
    console.log("Hello and welcome, ",name);
}

function greet(name = 'Guest') {
    console.log("Hello and welcome, ",name);
}
greet('Hitesh')

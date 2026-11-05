export function add(a, b) {
    console.log(a+b);
}

function sub(a, b) {
    console.log(a-b);
}

function div(a, b) {
    console.log(a/b);
}

function mul(a, b) {
    console.log(a*b);
}

export const appName = "Calculator"

export const user = { username: 'Hitesh', role: "QA Engineer" }

// named export
export { 
    sub, div, mul
}

// Default export
function printMessage() {
    console.log("Export default export message");
}

const tempVar = "Software Development Engineer in Test"
// export default printMessage;
export default {
    printMessage, tempVar
}


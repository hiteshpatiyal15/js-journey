function add(n1, n2) {
    if (validateNumber) {
        return n1 + n2;
    }
}

function sub(n1, n2) {
    if (validateNumber) {
    return n1 - n2;    
    }
    
}

function mul(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    return n2 / n2;
}

export {
    add, sub, mul, div
}

function validateNumber(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return true
    } else {
        console.log('Invalid Number Type')
    }
}
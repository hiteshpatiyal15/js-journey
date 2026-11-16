// take the multiple values => rest operator => one collection

function add(no1, no2) {
    console.log(no1+no2); 
}

function add(no1, no2, no3) {
    console.log(no1+no2+no3); 
}

add(12, 32) // will give undefined for no3

// using rest operator
function add(...nos) {
    // console.log(nos);
    let sum = nos.reduce((total, no) => {
        return total+no
    }, 0)
    console.log(sum);
}

add(32, 12)
add(43, 21, 23)
add(5332, 124, 12, 12, 4, 0)


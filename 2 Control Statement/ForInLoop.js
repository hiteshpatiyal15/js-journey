const items = { Apple: 2, Banana: 4, Guava: 8 };
for (let fruit in items) {
    console.log(`No of, ${ fruit } are ${items[fruit]}`);
}

const obj = { p: 5, q: 4, r: 3 };
for (let key in obj) {
    console.log(`Key: ${key}`);
    for (let i = 0; i < 3; i++){
        console.log(`value multipled by ${i}: ${obj[key]*i}`);
    }
}

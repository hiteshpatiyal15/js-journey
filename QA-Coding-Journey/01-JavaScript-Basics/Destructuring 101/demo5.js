const browsers = ['chrome', 'safari', 'edge', 'opera']

const [b1, b2, b3, b4 ] = browsers;
console.log(b1);

// access the first and last element
const [B1,,,B3] = browsers;
console.log(B1)
console.log(B3)

const sample = ['sample1']

const [s1, s2] = sample;
console.log(s2);

const [S1, S2 = "default value"] = sample;
console.log(S2);


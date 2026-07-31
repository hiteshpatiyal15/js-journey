let names = [`Karan`, `Ben`, `Virat`]
console.log(names.length)
console.log(names["0"])
console.log(names["3"])

//push
names.push(`Aditya`)
let len = names.length
console.log(len)
console.log(names)

names[7] = `Chirag`
console.log(names)

let data = []
console.log(data.length)
data[1000] = `Jayesh`
console.log(data)

//pop functions
let subjects = [`Maths`, `English`, `Physics`, `Chemistry`, `Jave Programming`]
console.log(subjects)
subjects.pop()
console.log(subjects)

let subject 
for (let i = 0; i < 5; i++) {
    subject = subjects.pop()
    console.log(subjects)
}
console.log(subjects.pop())

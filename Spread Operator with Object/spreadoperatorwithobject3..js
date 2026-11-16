const userPersonalData = {
    name: 'Hitesh',
    age: 29,
    city: 'Thane',
    role: 'DevOps'
}

const userProfessionalData = {
    role: 'Senior Test Engineer',
    company: 'DCIT',
    exp: 7.5
}

const empData = {
    ...userPersonalData,
    ...userProfessionalData
}
console.log(empData);
'use strict'

const students = require('./students.json')

students.forEach(student => {
    const student = student.firstName + student.lastName;
    say('Hello' + firstName + lastName)
});

let sayHello = students.forEach(student);

console.log(sayHello);

const filterName = (student) => {
    return student.filter(word => {
        student.lastName == 'D' 
        let index = student.filter;
    });
};

console.log(`Count of last names starting with ${index} is ${filterName.charAt(index)}`);






// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
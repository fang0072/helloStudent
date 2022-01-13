'use strict'

const students=require('./students.json');

console.log(students)

students.forEach(student => {
    console.log(`Hello ${student.firstName} ${student.lastName}`);

});

let newStudent =  students.filter(student => {
    return student.lastName.toLocaleLowerCase(lastName.indexOf()==0);
});

console.log("'Count of last name starting with D is'" + newStudent.charAt() +"'");








// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
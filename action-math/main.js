// main.js

let first_number = process.env.INPUT_FIRST_NUMBER
let second_number = process.env.INPUT_SECOND_NUMBER
let name = process.env.INPUT_NAME

var result = first_number + second_number

console.log(`Hello, ${name}`)
console.log(`The result of your two numbers is: ${result}`)

// main.js

let first_number = process.env.INPUT_FIRST_NUMBER
let second_number = process.env.INPUT_SECOND_NUMBER
let name = process.env.INPUT_NAME

var result = parseInt(first_number,10) + parseInt(second_number,10)

console.log(`Hello, ${name}`)
console.log(`The result of your two numbers is: ${result}`)

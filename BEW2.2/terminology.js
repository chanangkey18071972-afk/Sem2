/* 
Keywords - Reserved words that JavaScripct uses to do specific things

var
let
const
for
while
if
else
function


*/

//RULES FOR VARIABELS
/*
1 Can be alphanumeric
2 Can contain lower or uppercase letters
3 Can contain certain symbols, such as_ or $
4 Cannot start with a number
5 Can start with a symbol
*/


// Variable - Something that holds holds a value
// var someVariable = 5
// let anotherVariable = 10
// const moreVariable = 20

// let 1moreVariable = 30 - you cannot start in the number
// let moreVariable1 = 30

// let some_variable = 40
// let some$variable = 40
// can start with the symbol

// console.log(someVariable + anotherVariable + moreVariable)

// Variables and their Case Types

// let some_variable - snake_case
// let someVariable - camelCase
// let SomeVariable - PascalCase
// let SOME_VARIABLE - UPPER_SNAKE_CASE or SCREAMING_SNAKE_CASE
// let some-variable - kebab-case-more-words

//Data Types - Type of data that is stored

// String - alphanumeric / words/ something within the quotes
// Used to represent letter or number in a literal sense

// console.log("1" + "1")

// Boolean

// Integers (in javascript, it's known as numbers)

// Does numbers include decimal number? - Yes

// NON-PRIMITIVE DATA TYPES

// Array - A collection of variable that will be arranged in numbered sequence, index start at 0

// Object - A collection of variable that is repesented by key - value pairs


// Operators

// = (Assignment Operator)

// COMPARISON OPERATORS
// ==  (Equality operator) - Basically check if left side = right side
// > (Greater Than Operator)
// < (Less Than Operator)
// >= (Greater Than or Equal Operator)
// <= (Less Than or Equal Operator)
// != (Inequality Operator) - Returns true if left side 
 
// DTRICT EQUALITY & INEQUALITY
// === (Same as the equality operator, but it will check data types as well)
// !==( The opposite of strict equality operator)

// # Exercise 1: The Passing Grade (if / else)

// # Scenario: A teacher needs to automatically determine if a student has passed or failed a quiz based on their score.
// - Task: Write a script that checks a variable called score.
// - Rules:
//  - If the score is 50 or higher, print "Pass".
//  - If the score is less than 50, print "Fail".
// - Bonus Challenge: Add an extra condition. If the score is exactly 100, print "Perfect Score!" instead of just "Pass".

const score = 100

if (score === 100) {
    console.log("Perfect Score!");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

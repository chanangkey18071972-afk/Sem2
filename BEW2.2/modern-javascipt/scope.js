// Variable Scope and Definitions

// 2 different types of scope (technically 3)
// - Function Scope
// - Block Scope
// - Global Scope (By default)

// Keywords to declare a variable
/*
    var - Function Scope
    let - Block Scope
    const - Block Scope
*/

// What is a Scope?
// Scope is the area of code in which a variable is relevant
// Commonly defined by curly brakets
// Most commonly used by if/else, loops, and functions

// var will follow whith the inside block when the block has change to athoer things
var name = "jack";

if (true) {
    var name = "John";
    console.log(name);
}

// printName();
console.log(name); // jack

// Use block-scoped declaration: let and const
// let  will not follow whith the block when the block have change anything
let fruit = "Apple";

if (true) {
    let fruit = "Banana";
    console.log(fruit);
}

console.log(fruit);

// The difference between var + let vs const = is that const, you cannot reassign the variable
// const car = 'Toyota';
// car = 'Honda'; // Uncaught TypeError: Assignment to constant variable.

const car = 'Toyota';

if (true) {
    const car = 'Honda';
    console.log(car); // Honda
    if(true){
        // const car = "Mazda"
        console.log(car)
    }
}

console.log(car); // Toyota

const ball = ["volleyball", "basketball", "footbal"]

ball.push("american footbal")

console.log(ball)
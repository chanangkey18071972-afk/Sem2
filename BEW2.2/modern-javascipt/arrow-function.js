// // Arrow function syntax
// const multiply = (a, b) => a * b

// // Traditional function
// function TraditionalMultiply(a, b){
//     return a * b
// }

// // Display all item from an argument
// const displayAll = (arr) => {
//     for (item of arr){
//         console.log(item)
//     }
// }

// const phones = ["iPhone", "Samsung", "Oppo"]
// displayAll(phones)

// const convertCMtoM = (cm) => {
//     const m = cm / 100
//     return m 
// }
// const length0fCarInCm = 300
// console.log(convertCMtoM(length0fCarInCm))

// const length0fCarInm = convertCMtoM(length0fCarInCm)
// const length0fCarInM = convertCMtoM(500)
// console.log(length0fCarInm)
// console.log(length0fCarInM)

// // Write an arrow function that converts kgs to Ibs, then returns the result.

// // const convertKGtoIbs = (kgs) => {
// //     const ibs = kgs * 2.205
// //     return ibs
// // }
// // const length0fKgsInibs = convertKGtoIbs(length0fKgsInIbs)
// // console.log(convertKGtoIbs(convertKGtoIbs))

// const convertKgToPounds = (kgs) => kgs * 2.20

// const dTrump = 108
// const dTrumpInPounds = convertKgToPounds(dTrump)
// console.log(dTrumpInPounds)

//  for (let i = 1; i <= 10; i++) {
//      if (i % 2 === 0){
//          console.log(i);
//     }
//  }


// var counter = 5
//  while (counter > 0) {
//     console.log(counter);
//    counter--;
// }
// console.log("Blast off! 🚀");

// Arrow Function in Callback
// What are callbacks?

// Example of callbacks
// .filter, .map, .reduce -> Array methods to do specific actions
// .filter -> is to find only the elements that fit the specified criteria
// .map -> is essentially behaves like a for.. of loop but simple it will also create a new array
// .reduce -> Used for calculating total / accumulation of value

const list = [2, 4, 6, 8]

const list2 = list.filter(num => num > 5)
console.log(list2) // [6, 8]

//                               This is the callback
const listMultiplied = list.map (num => num * 2)
console.log(listMultiplied) //

// Example without arrow function in callback
const listSquared = list.map(function(num){
   return num * num
})
console.log(listSquared) // 4, 9, 36, 64

const sum = list.reduce((total, num) => total + num, 0)
console.log(`The result of .reduce is ${sum}`)

// I want a product of the array using .reduce method, in arrow function format

const product = list.reduce((prod, num) => prod * num, 1)
console.log(`This answer of .reduce is ${product}`)
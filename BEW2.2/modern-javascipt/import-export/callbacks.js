function greet(callback){
    console.log("Hello!")
    callback(); // here we are calling back the function passed as an argument
}
// Notice how Hello will be outputted first, followed by what we passed in as an argument below
// Think of it essentially as calling an argument passed in as a function, that is a callback
greet(function sayName(){
    console.log("John Doe")
})
// Outputs:
// Hello!
// John Doe

function outsideCalledFunction(passAFunctionHere) {
    console.log("This is a normal console log from the native function itself");
    passAFunctionHere();
}

outsideCalledFunction(function () {
    console.log("Sir Paul");
});

function insideFunction1() {
    console.log("This is from the first insideFunction");
}

function insideFunction2() {
    console.log("This is from the second insideFunction");
}
outsideCalledFunction(insideFunction1);
outsideCalledFunction(insideFunction2);
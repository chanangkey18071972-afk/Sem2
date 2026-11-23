import { sayHello } from "./greeting.js";
import { add, substract } from "./mathOperations.js";
import onlyOneFunction from "./defaultExporter.js";

sayHello()
console.log(add(5,7))
console.log(substract(55,3))
onlyOneFunction()
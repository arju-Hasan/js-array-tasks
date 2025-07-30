// Create different variables, each containing either an array or a non-array value.
// 
// Now use isArray to check if each variable is an array.
// 
// Print a message to the console indicating whether each variable is an array or not.

let num = [1, 2, 3];
let message = "Hello";
let raju = { name: "Raju", age: 25 };

if (Array.isArray(num)) {
    console.log("num is an array.");
} else {
    console.log("num is not an array.");
}

if (Array.isArray(message)) {
    console.log("message is an array.");
} else {
    console.log("message is not an array.");
}

if (Array.isArray(raju)) {
    console.log("raju is an array.");
} else {
    console.log("raju is not an array.");
}

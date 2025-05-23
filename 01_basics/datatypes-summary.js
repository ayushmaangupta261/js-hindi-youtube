// JavaScript Data Types:
// In JavaScript, values are categorized into two main types: Primitive and Reference (Non-Primitive).

// --- Primitive Data Types ---
// Primitive values are immutable (cannot be changed after creation) and are stored directly in the memory stack.
// When you assign a primitive value to a variable, you are assigning a copy of that value.

// There are 7 types of Primitive Data Types:

// 1. String: Represents textual data. Enclosed in single quotes (''), double quotes (""), or backticks (``).
const name = "hitesh" // Example of a string literal.

// 2. Number: Represents both integer and floating-point numbers.
const score = 100      // Example of an integer.
const scoreValue = 100.3 // Example of a floating-point number.

// 3. Boolean: Represents a logical entity and can have two values: `true` or `false`.
const isLoggedIn = false // Example of a boolean.

// 4. null: Represents the intentional absence of any object value. It's a primitive value.
// `typeof null` is "object", which is a long-standing bug in JavaScript.
const outsideTemp = null // Example: A variable explicitly set to "nothing".

// 5. undefined: Represents a variable that has been declared but has not yet been assigned a value.
// It can also be the value of a function parameter for which no argument was provided.
let userEmail; // Example: `userEmail` is `undefined` until a value is assigned.

// 6. Symbol (ES6): Represents a unique and immutable value.
// Symbols are often used to create unique property keys for objects to avoid name collisions.
const id = Symbol('123')       // Creates a new unique Symbol with description '123'.
const anotherId = Symbol('123') // Creates another new unique Symbol with the same description.

// Comparison of Symbols:
// Even if they have the same description, each Symbol created is unique.
console.log(id === anotherId); // Output: false (because `id` and `anotherId` are distinct Symbols)

// 7. BigInt (ES11): Represents whole numbers larger than 2^53 - 1 (the maximum safe integer for `Number`).
// You create a BigInt by appending `n` to the end of an integer literal.
// const bigNumber = 3456543576654356754n // Example of a BigInt.
// BigInt operations are slower than Number operations.


// --- Reference (Non-Primitive) Data Types ---
// Reference values are objects. They are stored in the heap memory, and variables hold a reference (memory address) to them.
// When you assign a reference value to a variable, you are assigning a copy of the reference, not the actual object.
// This means if you modify the object through one variable, it will be reflected in all variables referencing that object.

// Types of Reference Data Types:

// 1. Array: An ordered, integer-indexed collection of values. Arrays are a type of object.
const heros = ["shaktiman", "naagraj", "doga"]; // Example of an array.

// 2. Object: A collection of key-value pairs. The most fundamental non-primitive type.
let myObj = {
    name: "hitesh", // Key: "name", Value: "hitesh"
    age: 22,         // Key: "age", Value: 22
} // Example of an object literal.

// 3. Function: A block of code designed to perform a particular task. Functions are also objects in JavaScript.
const myFunction = function(){
    console.log("Hello world");
} // Example of a function expression.

// --- The `typeof` Operator ---
// The `typeof` operator returns a string indicating the type of the unevaluated operand.

console.log(typeof anotherId); // Output: "symbol" (correctly identifies Symbol)
// Other `typeof` outputs:
// console.log(typeof score);       // "number"
// console.log(typeof isLoggedIn);  // "boolean"
// console.log(typeof outsideTemp); // "object" (this is the historical bug for `null`)
// console.log(typeof userEmail);   // "undefined"
// console.log(typeof heros);       // "object" (arrays are objects)
// console.log(typeof myObj);       // "object"
// console.log(typeof myFunction);  // "function" (or "object" in some older environments, but typically "function")
// console.log(typeof bigNumber);   // "bigint"

// --- ECMAScript Specification ---
// The link `https://262.ecma-international.org/5.1/#sec-11.4.3` points to the ECMAScript Language Specification.
// ECMAScript is the standard that JavaScript implements. This specific section (11.4.3)
// likely refers to the `typeof` operator or related type conversion rules in an older version (5.1).
// Understanding the specification helps in deeply comprehending how JavaScript works under the hood.
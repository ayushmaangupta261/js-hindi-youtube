"use strict"; // Enforces strict mode, catching common coding errors
// Strict Mode:
// - Purpose: Activates a stricter set of rules for parsing and executing JavaScript code.
// - Benefits:
//   - Catches common coding mistakes (e.g., undeclared variables) as errors instead of silently failing.
//   - Prevents the creation of accidental global variables.
//   - Disallows certain unsafe or confusing features.
// - Placement: Can be applied to an entire script by placing it at the top, or to individual functions.

// ==============================
// 🧠 1. Type Conversion (Explicit)
// ==============================
// Type conversion (or type casting) is the explicit process of converting a value from one data type to another.
// This is done intentionally by the programmer using built-in functions or constructors.

// 🔢 String to Number Conversion
let score = "hitesh";
let valueInNumber = Number(score);
// `Number()` constructor/function attempts to convert its argument to a number.
console.log(typeof valueInNumber); // Output: "number"
// Even if the conversion results in `NaN`, the *type* of `NaN` is still `number`.
console.log(valueInNumber);        // Output: NaN (Not a Number)
// `NaN` is a special numeric value that represents an undefined or unrepresentable numerical result.

// Examples of `Number()` conversion:
Number("33")      // Output: 33 (Valid numeric string converts successfully)
Number("33abc")   // Output: NaN (String contains non-numeric characters)
Number(true)      // Output: 1 (Boolean `true` converts to `1`)
Number(false)     // Output: 0 (Boolean `false` converts to `0`)
Number(null)      // Output: 0 (`null` converts to `0`)
Number(undefined) // Output: NaN (`undefined` converts to `NaN`)

// 🔤 Boolean Conversion
let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// `Boolean()` constructor/function converts its argument to a boolean value.
// It follows "falsy" and "truthy" rules.
console.log(booleanIsLoggedIn); // Output: true

// Examples of `Boolean()` conversion:
Boolean(1)        // Output: true (Any non-zero number is truthy)
Boolean(0)        // Output: false (Zero is falsy)
Boolean("")       // Output: false (Empty string is falsy)
Boolean("hitesh") // Output: true (Any non-empty string is truthy)
Boolean(null)     // Output: false (`null` is falsy)
Boolean(undefined)// Output: false (`undefined` is falsy)
Boolean(NaN)      // Output: false (`NaN` is falsy)

// 🔁 Number to String Conversion
let someNumber = 33;
let stringNumber = String(someNumber);
// `String()` constructor/function converts its argument to a string.
console.log(stringNumber);        // Output: "33"
console.log(typeof stringNumber); // Output: "string"

// Examples of `String()` conversion:
String(123)       // Output: "123"
String(true)      // Output: "true"
String(null)      // Output: "null"
String(undefined) // Output: "undefined"

// 🔄 Implicit Type Coercion
// Implicit coercion (or automatic type conversion) happens when JavaScript automatically converts data types
// during operations without explicit instructions from the programmer. This can sometimes lead to unexpected results.

console.log("5" - 2); // Output: 3
// Explanation: The `-` (subtraction) operator primarily works with numbers.
// JavaScript implicitly coerces the string "5" to the number 5 before performing subtraction.

console.log("5" + 2); // Output: "52"
// Explanation: The `+` (addition) operator behaves differently.
// If *either* operand is a string, it performs string concatenation.
// The number 2 is implicitly coerced to the string "2", and then "5" + "2" results in "52".

// ==============================
// 🧩 2. Data Types
// ==============================
// JavaScript categorizes values into two main groups: Primitive and Non-Primitive (Reference).

// JavaScript has 7 primitive data types:
// Primitive values are immutable (cannot be changed) and are stored directly in the memory stack.
// 1. Number: Represents both integer and floating-point numbers.
// 2. BigInt: Represents arbitrary-precision integers (numbers larger than `2^53 - 1`).
// 3. String: Represents sequences of characters (text).
// 4. Boolean: Represents a logical entity with `true` or `false` values.
// 5. Undefined: Represents a variable that has been declared but not yet assigned a value.
// 6. Null: Represents the intentional absence of any object value.
// 7. Symbol: Represents a unique and immutable value, often used for object property keys.

// Non-Primitive (Reference) Data Types:
// These are objects, arrays, and functions. They are mutable and stored in the heap memory.
// Variables hold a reference (memory address) to these values, not the values themselves.

// 🔍 Checking Types with `typeof` operator
console.log(typeof undefined); // Output: "undefined" (Correctly identifies `undefined`)
console.log(typeof null);      // Output: "object"
// This is a known historical quirk/bug in JavaScript. Despite `typeof null` returning "object",
// `null` is a primitive value. If you need to check specifically for `null`, use `value === null`.

// ==============================
// ➕ 3. Operators
// ==============================
// Operators are symbols that perform operations on one or more operands (values or variables).

// Arithmetic Operators: Perform mathematical calculations.
console.log(2 + 2);   // Output: 4 (Addition)
console.log(2 - 2);   // Output: 0 (Subtraction)
console.log(2 * 2);   // Output: 4 (Multiplication)
console.log(2 ** 3);  // Output: 8 (Exponentiation: 2 raised to the power of 3)
console.log(2 / 3);   // Output: 0.666... (Division)
console.log(2 % 3);   // Output: 2 (Remainder/Modulo: The remainder when 2 is divided by 3)

// String Concatenation: Uses the `+` operator to join strings.
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3); // Output: "hello hitesh"

// Type Coercion in Operations (Revisited):
// Demonstrates how `+` behaves differently based on operand types.
console.log("1" + 2);     // Output: "12" (String concatenation)
console.log(1 + "2");     // Output: "12" (String concatenation)
console.log("1" + 2 + 2); // Output: "122"
// Explanation: Evaluates from left to right. "1" + 2 -> "12" (string). Then "12" + 2 -> "122" (string).
console.log(1 + 2 + "2"); // Output: "32"
// Explanation: Evaluates from left to right. 1 + 2 -> 3 (number). Then 3 + "2" -> "32" (string).

// Operator Precedence: Determines the order in which operators are evaluated in an expression.
// Parentheses `()` have the highest precedence.
console.log((3 + 4) * 5 % 3); // Output: 2
// Explanation:
// 1. `(3 + 4)` evaluates first due to parentheses: `7`
// 2. `7 * 5` evaluates next (multiplication has higher precedence than modulo normally, but here it's left-to-right): `35`
// 3. `35 % 3` evaluates last: `2` (remainder of 35 divided by 3)

// Unary Operators: Operate on a single operand.
// Unary Plus (`+`): Attempts to convert its operand to a number.
console.log(+true);   // Output: 1 (Boolean `true` converted to number 1)
console.log(+"");     // Output: 0 (Empty string converted to number 0)
console.log(+"5");    // Output: 5 (Numeric string converted to number)

// Unary Minus (`-`): Converts its operand to a number and then negates it.
console.log(-"5");    // Output: -5

// Assignment Operators: Assign values to variables.
let num1, num2, num3;
// Chained assignment: Values are assigned from right to left.
num1 = num2 = num3 = 2 + 2;
// Explanation:
// 1. `2 + 2` evaluates to `4`.
// 2. `num3 = 4` occurs.
// 3. `num2 = num3` (which is 4) occurs.
// 4. `num1 = num2` (which is 4) occurs.
console.log(num1, num2, num3); // Output: 4 4 4

// Increment/Decrement Operators: Increase or decrease a variable's value by one.
let gameCounter = 100;
// Prefix Increment (`++variable`): Increments the variable *then* returns the new value.
++gameCounter; // `gameCounter` becomes 101, and 101 is returned (though not used here).
console.log(gameCounter); // Output: 101

let x = 5;
let y = ++x; // x becomes 6, y becomes 6

let z = 5;
let w = z++; // w becomes 5, z becomes 6 (Postfix Increment: returns original value, then increments)
console.log(`x: ${x}, y: ${y}, z: ${z}, w: ${w}`); // Output: x: 6, y: 6, z: 6, w: 5


// ==============================
// 📚 References
// ==============================
// MDN Web Docs are an excellent resource for detailed and up-to-date information on JavaScript.
// - Type Conversion: https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion
// - Data Types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
// - Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators

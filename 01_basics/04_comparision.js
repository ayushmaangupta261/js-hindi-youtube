// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);// console.log(2 > 1);   // true: 2 is numerically greater than 1.
// console.log(2 >= 1);  // true: 2 is numerically greater than or equal to 1.
// console.log(2 < 1);   // false: 2 is not numerically less than 1.
// console.log(2 == 1);  // false: 2 is not numerically equal to 1.
// console.log(2 != 1);  // true: 2 is not numerically equal to 1.


// console.log("2" > 1);   // true: The string "2" is converted to the number 2, then 2 > 1 is evaluated.
// console.log("02" > 1);  // true: The string "02" is converted to the number 2, then 2 > 1 is evaluated.
//
// When comparing a string with a number using non-strict comparison operators (>, <, >=, <=),
// JavaScript attempts to convert the string to a number.

console.log(null > 0);  // false:
// When `null` is compared with a number using relational operators (>, <, >=, <=),
// `null` is converted to `0`. So, `0 > 0` which is false.

console.log(null == 0); // false:
// The `==` ( loose equality ) operator behaves differently.
// `null` is only loosely equal to `null` or `undefined`.
// It is NOT converted to `0` for `==` comparison with numbers.

console.log(null >= 0); // true:
// Similar to `null > 0`, `null` is converted to `0` for relational comparison.
// So, `0 >= 0` which is true.

console.log(undefined == 0); // false:
// `undefined` is only loosely equal to `undefined` or `null`.
// It is NOT converted to a number for `==` comparison.

console.log(undefined > 0); // false:
// When `undefined` is compared with a number using relational operators,
// `undefined` is converted to `NaN` (Not a Number).
// Any comparison with `NaN` (except `NaN != NaN`) results in `false`.

console.log(undefined < 0); // false:
// Similar to `undefined > 0`, `undefined` is converted to `NaN`.
// Comparison with `NaN` results in `false`.

// === (Strict Equality Operator) //

console.log("2" === 2); // false:
// The `===` (strict equality) operator checks both value AND data type.
// "2" is a string, and 2 is a number. Their types are different, so it returns false,
// without any type coercion.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);





// Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. It's a fundamental concept in JavaScript because the language is dynamically typed and often tries to "do the right thing" when operating on values of different types.


// Here's a breakdown:

// 1. What is it?
// When you perform an operation involving values of different data types (e.g., adding a number to a string, comparing a string to a number), JavaScript's engine will often try to convert one or both values to a compatible type before performing the operation. This automatic conversion is called coercion.


// 2. Why does it happen?
// JavaScript is a loosely typed language. This means you don't explicitly declare the data type of a variable when you define it. The type is determined at runtime. Because of this flexibility, JavaScript needs mechanisms to handle operations where types don't perfectly match. Coercion is one such mechanism.



// 3. Types of Coercion:

// Implicit Coercion (Automatic Coercion): This is when JavaScript automatically converts types without your explicit instruction. This happens with:

// Loose Equality (==): As seen in your null == 0 example, == attempts to convert operands to a common type before comparison.
// Relational Operators (<, >, <=, >=): When comparing values of different types, especially strings and numbers, or null/undefined with numbers, JavaScript often converts them to numbers.

// Arithmetic Operators (+, -, *, /, %):
// Addition (+): If one operand is a string, the other will be converted to a string, and concatenation occurs.
// Example: "5" + 3 results in "53" (string concatenation).
// Example: 5 + "3" results in "53" (string concatenation).
// Other Arithmetic Operators (-, *, /, %): These operators generally try to convert operands to numbers.
// Example: "5" - 3 results in 2 (numeric subtraction after "5" is coerced to 5).
// Example: "10" / "2" results in 5 (numeric division).
// Boolean Contexts: Values are coerced to booleans in if statements, logical operators (&&, ||, !), and certain built-in functions. (e.g., if (0) or if ("") would be false).
// Explicit Coercion (Type Conversion): This is when you intentionally convert a value from one type to another using built-in JavaScript functions or operators.

// Number(): Converts to a number. Example: Number("123") results in 123.

// String(): Converts to a string. Example: String(123) results in "123".
// Boolean(): Converts to a boolean. Example: Boolean(0) results in false.
// parseInt(): Parses a string and returns an integer. Example: parseInt("123.45") results in 123.

// parseFloat(): Parses a string and returns a floating-point number. Example: parseFloat("123.45") results in 123.45.
// Unary plus operator (+): A common shorthand to convert a value to a number. Example: +"5" results in 5.
// 4. Why is it important to understand?
// Understanding coercion is crucial for writing robust and predictable JavaScript code. Misunderstanding how coercion works can lead to unexpected bugs, especially when using the loose equality operator (==).


// 5. Best Practice:
// While implicit coercion is part of JavaScript, it's generally recommended to:

// Use the strict equality operator (===) whenever possible. This avoids implicit type conversion and makes your comparisons more predictable.
// Perform explicit type conversions when you intend to change a value's type. This makes your code clearer and less prone to subtle errors caused by unexpected coercion.
// In essence, coercion is JavaScript's way of being flexible, but it's a double-edged sword. When understood, it can be useful; when ignored, it can be a source of frustration.
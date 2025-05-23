const score = 400
// Primitive Number:
// `score` is a primitive number data type.
// Primitive numbers are directly stored values, not objects.
// Most numeric operations work directly with these.
// console.log(score); // Output: 400

const balance = new Number(100)
// Number Object:
// `new Number(100)` creates a Number object.
// While it holds the numeric value 100, it's an object wrapper around the primitive value.
// `typeof balance` would return 'object'.
// Generally, it's preferable to use primitive numbers for simplicity and performance,
// unless you specifically need the object features (which are rare in typical use cases).
// console.log(balance); // Output: [Number: 100] (shows it's a Number object)

// console.log(balance.toString().length);
// Number.prototype.toString():
// Converts a Number value to a string representation.
// This is useful when you need to perform string operations on a number.
// `.length` then gets the length of the resulting string.
// Output: "100" (as a string).length => 3

// console.log(balance.toFixed(1));
// Number.prototype.toFixed(digits):
// Formats a number using fixed-point notation.
// It returns a string representation of the number with a specified number of digits after the decimal point.
// `digits` specifies the number of digits to appear after the decimal point (0-100).
// Output: "100.0"

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// Number.prototype.toPrecision(precision):
// Returns a string representation of the Number object to the specified precision.
// `precision` is an integer specifying the number of significant digits.
// It will round the number if necessary.
// Output: "123.9" (4 significant digits: 1, 2, 3, 9. Rounds up due to 8966)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
// Number.prototype.toLocaleString(locales, options):
// Returns a string with a language-sensitive representation of this number.
// `locales`: A string with a BCP 47 language tag, or an array of such strings.
//            e.g., 'en-US' for US English, 'en-IN' for Indian English.
// It automatically adds appropriate separators (commas, periods) based on the locale.
// Output: "10,00,000" (for 'en-IN' locale)

// +++++++++++++ Maths +++++++++++++++++++++++++++++
// Math Object:
// The `Math` object is a built-in object that has properties and methods for mathematical constants and functions.
// Unlike other global objects, Math is not a constructor. All its properties and methods are static.

// console.log(Math);
// Output: [object Math] (or a detailed object showing all Math properties and methods)

// console.log(Math.abs(-4));
// Math.abs(x):
// Returns the absolute value of a number (the non-negative value of x).
// Output: 4

// console.log(Math.round(4.6));
// Math.round(x):
// Returns the value of a number rounded to the nearest integer.
// Rounds up if the fractional part is 0.5 or greater, otherwise rounds down.
// Output: 5

// console.log(Math.ceil(4.2));
// Math.ceil(x):
// Returns the smallest integer greater than or equal to x (rounds up).
// Output: 5

// console.log(Math.floor(4.9));
// Math.floor(x):
// Returns the largest integer less than or equal to x (rounds down).
// Output: 4

// console.log(Math.min(4, 3, 6, 8));
// Math.min(...values):
// Returns the smallest of the zero or more numbers given as input parameters.
// Output: 3

// console.log(Math.max(4, 3, 6, 8));
// Math.max(...values):
// Returns the largest of the zero or more numbers given as input parameters.
// Output: 8

// console.log(Math.random());
// Math.random():
// Returns a floating-point, pseudo-random number in the range [0, 1)
// (inclusive of 0, but exclusive of 1).
// Output: (a random decimal number like 0.789123...)

// console.log((Math.random()*10) + 1);
// Generating Random Numbers in a Specific Range (e.g., 1 to 10):
// 1. `Math.random()`: Generates a number between 0 (inclusive) and 1 (exclusive).
// 2. `* 10`: Multiplies by 10 to get a number between 0 (inclusive) and 10 (exclusive).
// 3. `+ 1`: Adds 1 to shift the range to 1 (inclusive) to 11 (exclusive).
// This results in a floating-point number between 1.0 and 10.999...
// Output: (a random decimal number like 7.54321...)

// console.log(Math.floor(Math.random()*10) + 1);
// Generating Random Integers in a Specific Range (e.g., 1 to 10):
// 1. `Math.random()*10`: As above, 0.0 to 9.999...
// 2. `Math.floor(...)`: Rounds the number down to the nearest whole integer.
//    This gives an integer between 0 and 9 (inclusive).
// 3. `+ 1`: Adds 1 to shift the range to 1 to 10 (inclusive).
// This is a common pattern to get random integers from 1 to N.
// Output: (a random integer between 1 and 10, e.g., 8)

const min = 10
const max = 20

// Generating Random Integers within a Custom Range [min, max] (inclusive):
// Formula: `Math.floor(Math.random() * (max - min + 1)) + min`
// Breakdown:
// 1. `(max - min + 1)`: Calculates the total number of possible values in the range.
//    For `min=10, max=20`, this is `(20 - 10 + 1) = 11` values (10, 11, ..., 20).
// 2. `Math.random() * (max - min + 1)`: Generates a random floating-point number
//    from 0 (inclusive) up to `(max - min + 1)` (exclusive).
//    e.g., `0` to `10.999...` for our example.
// 3. `Math.floor(...)`: Converts the floating-point number to an integer by rounding down.
//    This gives an integer from 0 to `(max - min)` (inclusive).
//    e.g., `0` to `10` for our example.
// 4. `+ min`: Adds the `min` value to shift the range to the desired `[min, max]` interval.
//    e.g., `0 + 10` to `10 + 10`, resulting in `10` to `20`.
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Output: (a random integer between 10 and 20, e.g., 17)
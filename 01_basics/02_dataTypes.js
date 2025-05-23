"use strict"; // Treat all JS code as per the latest standards (ES6+)
// Strict Mode:
// - Purpose: Enables "strict mode" for the entire script or a specific function.
// - Benefits:
//   - Helps write "secure" JavaScript by eliminating some JavaScript silent errors by changing them to throw errors.
//   - Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
//   - Prohibits some syntax likely to be defined in future versions of ECMAScript.
// - How it works: It enforces stricter parsing and error handling rules.
//   For example, it prevents accidental global variable creation (e.g., `x = 10;` without `let`/`const`/`var`).

// alert(3 + 3) // ❌ This would work in browsers, not in Node.js
// `alert()` Function:
// - Purpose: Displays an alert box with a specified message and an OK button.
// - Environment Dependency: `alert()` is a Web API (part of the browser's Document Object Model - DOM).
//   It is not a standard JavaScript language feature.
// - Node.js Context: When running JavaScript in a Node.js environment (which is a server-side runtime),
//   there is no browser window or DOM, so `alert()` is not available and will cause an error.
//   This line is commented out because it would fail in a Node.js environment.

console.log(3
    +
    3) // ✅ This works but avoid breaking lines unnecessarily for better readability
// `console.log()`:
// - Purpose: A fundamental debugging tool in JavaScript. It outputs messages to the console.
// - Arithmetic Operations: JavaScript correctly performs arithmetic operations.
// - Readability: While JavaScript allows line breaks within expressions (like `3 + 3` split across lines),
//   it's generally best practice to keep simple expressions on a single line for improved code readability and maintainability.
// Output: 6

console.log("Hitesh") // Output: Hitesh
// String Literal:
// - Purpose: Logs a string literal directly to the console.
// - Strings: Represent sequences of characters. They can be enclosed in single quotes (''), double quotes (""), or backticks (``).
// Output: Hitesh

// Variable declarations
// `let` Keyword:
// - Purpose: Declares a block-scoped local variable.
// - Mutability: Its value can be reassigned later.
// - Scope: Variables declared with `let` are only accessible within the block ({}) where they are defined.
// - Best Practice: Preferred over `var` in modern JavaScript due to better scoping rules.

let name = "hitesh"        // string
// `name` is a variable of type `string`.
let age = 18                // number
// `age` is a variable of type `number`.
let isLoggedIn = false      // boolean
// `isLoggedIn` is a variable of type `boolean` (true/false).
let state;                  // undefined
// `state` is declared but not assigned a value. Its default value is `undefined`.

/*
📌 JavaScript Primitive Data Types:
Primitive values are immutable (cannot be changed after creation) and are stored directly in the memory stack.
When you assign a primitive value to a variable, you are assigning a copy of that value.

1. number     => 2^53 range
   - Represents both integer and floating-point numbers.
   - JavaScript uses 64-bit floating-point format (IEEE 754).
   - `2^53 - 1` is the maximum safe integer (`Number.MAX_SAFE_INTEGER`). Beyond this, precision issues can occur.

2. bigint     => for very large numbers
   - Introduced in ES11 (ECMAScript 2020).
   - Represents whole numbers larger than `2^53 - 1`.
   - Created by appending `n` to an integer literal (e.g., `123n`).

3. string     => "", '', ``
   - Represents textual data.
   - Can be enclosed in single quotes, double quotes, or backticks (template literals).
   - Template literals (backticks) allow for embedded expressions (`${variable}`) and multi-line strings.

4. boolean    => true or false
   - Represents a logical entity.
   - Used for conditional logic and flow control.

5. null       => intentional absence of any value (type is 'object')
   - A primitive value that represents the intentional absence of any object value.
   - It is often used to explicitly indicate that a variable has no value.
   - Quirk: `typeof null` returns "object". This is a long-standing historical bug in JavaScript, not an indication that `null` is an object.

6. undefined  => variable declared but not assigned
   - A primitive value that means a variable has been declared but has not yet been assigned a value.
   - It's also the value returned by functions that don't explicitly return anything.

7. symbol     => unique identifiers (mostly used in advanced JS)
   - Introduced in ES6 (ECMAScript 2015).
   - Represents a unique and immutable value.
   - Primarily used to create unique property keys for objects to avoid name collisions.
   - Each `Symbol()` call creates a new, distinct symbol.
*/

// typeof checks
// `typeof` Operator:
// - Purpose: Returns a string indicating the data type of its operand.
// - Useful for debugging and type checking.

console.log(typeof undefined); // Output: undefined
// Correctly identifies the type of `undefined`.

console.log(typeof null);      // Output: object (this is a well-known JS quirk)
// This is the famous JavaScript "bug" where `typeof null` returns "object".
// It's a historical error from the early days of JavaScript that has not been fixed to maintain backward compatibility.
// Despite this, `null` is a primitive value.

/*
📝 Notes:
- Use `use strict` to enforce cleaner code and avoid accidental errors.
  - It's good practice to include it at the top of your scripts or functions.
- Always use `let` and `const` instead of `var`.
  - `let` and `const` provide block-scoping, which is generally more intuitive and less error-prone than `var`'s function-scoping.
  - `const` for values that won't change, `let` for values that will.
- Understand the difference between `null` and `undefined`.
  - `null`: Explicitly "nothing" or "empty".
  - `undefined`: Variable declared but no value assigned yet.
- `typeof null` returns "object" — it's a historical bug in JS but widely accepted.
  - Be aware of this quirk when performing type checks. If you need to check specifically for `null`, use `=== null`.
*/
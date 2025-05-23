// JavaScript Variable Declaration:
// In JavaScript, variables are used to store data values.
// There are three main keywords for declaring variables: `const`, `let`, and `var`.
// Understanding their differences, especially regarding scope and mutability, is crucial for writing robust code.

// --- 1. `const` (Constant) ---
// Purpose: Declares a block-scoped local variable whose value cannot be reassigned once initialized.
//          Use `const` for values that should remain constant throughout the program's execution.

const accountId = 144553
// Characteristics:
// - Block-scoped: The variable is only accessible within the block ({}) where it's defined.
// - Must be initialized: A `const` variable must be assigned a value at the time of declaration.
// - Cannot be reassigned: Attempting to reassign a `const` variable will result in a `TypeError`.
// - Immutability (for primitives): For primitive values (like numbers, strings, booleans), the value itself is immutable.
// - Immutability (for objects/arrays): For non-primitive values (objects, arrays), `const` only prevents reassignment of the variable itself,
//   not the modification of the object's properties or array's elements.
// Uncommenting the next line will throw an error because `const` variables cannot be reassigned
// accountId = 2 // ❌ TypeError: Assignment to constant variable. (Not allowed)

// Logging the constant accountId
console.log(accountId); // Output: 144553


// --- 2. `let` ---
// Purpose: Declares a block-scoped local variable that can be reassigned later.
//          Use `let` when you expect the variable's value to change.

let accountEmail = "hitesh@google.com"
// Characteristics:
// - Block-scoped: Like `const`, `let` variables are accessible only within the block ({}) where they are defined.
// - Can be reassigned: The value of a `let` variable can be changed after its initial assignment.
// - Can be declared without initialization: If not initialized, `let` variables default to `undefined`.
let accountState; // Declaring a variable without initializing (will be `undefined`)

// Updating values of `let` variables
accountEmail = "hc@hc.com" // Reassigned
console.log(accountEmail); // Output: "hc@hc.com"
console.log(accountState); // Output: undefined


// --- 3. `var` (Variable - Older Keyword) ---
// Purpose: Declares a function-scoped variable. This is the oldest way to declare variables in JavaScript.
//          It is generally discouraged in modern JavaScript development.

var accountPassword = "12345"
// Characteristics:
// - Function-scoped: `var` variables are accessible throughout the entire function in which they are declared,
//   regardless of block scope. If declared outside any function, they become global.
// - Can be reassigned: Like `let`, `var` variables can be reassigned.
// - Can be redeclared: You can redeclare the same `var` variable multiple times in the same scope without error,
//   which can lead to unexpected behavior and bugs.
// - Hoisting: `var` declarations are "hoisted" to the top of their function or global scope.
//   This means you can use a `var` variable before it's declared in the code, but its value will be `undefined` until the actual declaration line is reached.

// Why avoid `var`?
// - Scope issues: Its function-scoping can lead to confusion and bugs, especially in loops or conditional blocks,
//   where you might expect block-level scoping (like `let` and `const`).
// - Accidental global variables: If `var` is used outside a function, it creates a global variable,
//   which can pollute the global namespace and cause conflicts.
// - Redeclaration: The ability to redeclare can hide bugs where a variable is accidentally redefined.

// Updating values of `var` variables
accountPassword = "21212121" // Reassigned
console.log(accountPassword); // Output: "21212121"


// --- 4. Undeclared Variables (Not Recommended) ---
// If you assign a value to a variable without declaring it using `const`, `let`, or `var`,
// JavaScript will automatically declare it as a global variable (in non-strict mode).
// This is considered a very bad practice as it pollutes the global scope and makes code harder to manage.

accountCity = "Jaipur" // Assigned without declaration
// In non-strict mode, this creates a global variable `accountCity`.
// In strict mode (`'use strict';` at the top of your script/function), this would throw a `ReferenceError`.

accountCity = "Bengaluru" // Reassigned
console.log(accountCity); // Output: "Bengaluru"


// --- `console.table()` for Displaying Variables ---
// `console.table()` is a useful method for displaying tabular data in the console.
// It takes an array of objects or an object as an argument and presents it in a readable table format.
// Here, we're passing an array of individual variable values.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
Output in console.table might look something like:
┌─────────┬───────────────────────────┐
│ (index) │         Values            │
├─────────┼───────────────────────────┤
│    0    │          144553           │
│    1    │      'hc@hc.com'          │
│    2    │      '21212121'           │
│    3    │      'Bengaluru'          │
│    4    │        undefined          │
└─────────┴───────────────────────────┘
*/

/*
📝 Summary and Best Practices:
1.  Use `const` by default: When declaring a variable, start with `const`. If you later find that the variable's value needs to change, then switch to `let`. This promotes immutability and helps prevent accidental reassignments.
2.  Use `let` for mutable variables: If you know the variable's value will be reassigned, use `let`.
3.  Avoid `var`: Due to its function-scoping and hoisting behavior, `var` can lead to unexpected results and is generally considered legacy. Modern JavaScript development strongly favors `const` and `let`.
4.  Always declare variables: Never assign a value to a variable without explicitly declaring it with `const`, `let`, or `var`. This prevents the creation of unintended global variables and makes your code more predictable and maintainable.
*/

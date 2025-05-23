const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
// Traditional String Concatenation:
// Using the '+' operator to concatenate strings and other data types.
// When a string is involved in addition, other types are coerced to strings.
// Output: "hitesh50 Value"

// Template Literals (String Interpolation):
// Introduced in ES6 (ECMAScript 2015), template literals use backticks (``).
// They allow for embedded expressions (like variables) using `${expression}` syntax.
// This is a cleaner and more readable way to create dynamic strings compared to traditional concatenation.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: "Hello my name is hitesh and my repo count is 50"

const gameName = new String('hitesh-hc-com')
// String Object Creation:
// While you can create strings using `new String()`, it's generally discouraged for primitive strings.
// `new String()` creates a String object, not a primitive string.
// Primitive strings are more common and efficient.
// For example, `typeof "hello"` is "string", but `typeof new String("hello")` is "object".
// Most string methods work on both, but strict equality (`===`) can behave differently.

// console.log(gameName[0]);
// Character Access (Bracket Notation):
// Strings can be treated like read-only arrays of characters.
// `gameName[0]` accesses the character at index 0 (the first character).
// Output: "h"

// console.log(gameName.__proto__);
// Prototype Access:
// `__proto__` is a legacy way to access an object's prototype.
// For String objects, this reveals the String.prototype, which contains all built-in string methods.
// In modern JavaScript, `Object.getPrototypeOf(gameName)` is the preferred way.
// Output: [String: ''] (or a detailed object showing String prototype methods)

// console.log(gameName.length);
// String.prototype.length:
// A property that returns the length of the string (number of characters).
// Output: 13 (for "hitesh-hc-com")

// console.log(gameName.toUpperCase());
// String.prototype.toUpperCase():
// A method that returns a new string with all characters converted to uppercase.
// Does not modify the original string.
// Output: "HITESH-HC-COM"

// String.prototype.charAt(index):
// Returns the character at the specified index.
// If the index is out of range, it returns an empty string.
console.log(gameName.charAt(2));
// Output: "t" (character at index 2 in "hitesh-hc-com")

// String.prototype.indexOf(searchValue, fromIndex):
// Returns the index of the first occurrence of the specified `searchValue` within the string.
// Returns -1 if the `searchValue` is not found.
// `fromIndex` (optional) specifies the index to start the search from.
console.log(gameName.indexOf('t'));
// Output: 2 (index of 't' in "hitesh-hc-com")

// String.prototype.substring(startIndex, endIndex):
// Extracts characters from `startIndex` up to (but not including) `endIndex`.
// If `endIndex` is omitted, it extracts to the end of the string.
// Handles negative arguments by treating them as 0. Swaps `startIndex` and `endIndex` if `startIndex` > `endIndex`.
console.log(newString);
const newString = gameName.substring(0, 4)
// Output: "hite" (characters from index 0 up to, but not including, index 4)

// String.prototype.slice(startIndex, endIndex):
// Extracts a section of a string and returns it as a new string.
// Similar to `substring`, but handles negative arguments differently:
// Negative `startIndex` is treated as `string.length + startIndex` (e.g., -1 is the last character).
// Negative `endIndex` is treated as `string.length + endIndex`.
console.log(anotherString);
const anotherString = gameName.slice(-8, 4)
// `gameName` is "hitesh-hc-com" (length 13)
// `startIndex` = -8 => 13 + (-8) = 5
// `endIndex` = 4
// Since `startIndex` (5) is greater than `endIndex` (4), `slice` returns an empty string.
// If it were `gameName.slice(4, -8)`: `endIndex` = 13 + (-8) = 5. So, `gameName.slice(4, 5)` would be "s".
// Output: "" (empty string, because the start index after resolving negative is greater than the end index)

const newStringOne = "   hitesh    "
console.log(newStringOne);
// Output: "   hitesh    " (original string with leading/trailing whitespace)

// String.prototype.trim():
// Removes whitespace characters from both ends (beginning and end) of a string.
// Whitespace characters include space, tab, new line, etc.
// Returns a new string; does not modify the original.
console.log(newStringOne.trim());
// Output: "hitesh"

const url = "https://hitesh.com/hitesh%20choudhary"

// String.prototype.replace(searchValue, replaceValue):
// Returns a new string with some or all matches of a `searchValue` replaced by a `replaceValue`.
// If `searchValue` is a string, only the first occurrence is replaced.
// If `searchValue` is a RegExp, all occurrences can be replaced (if global flag 'g' is used).

console.log(url.replace('%20', '-'))
// Output: "https://hitesh.com/hitesh-choudhary"


// String.prototype.includes(searchString, position):
// Determines whether one string may be found within another string, returning `true` or `false`.
// `position` (optional) is the index at which to begin searching.

console.log(url.includes('sundar'))
// Output: false (because 'sundar' is not found in the URL string)

// String.prototype.split(separator, limit):
// Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
// `separator` (optional): The pattern describing where each split should occur. Can be a string or a regular expression.
// `limit` (optional): A non-negative integer specifying a limit on the number of substrings to be included in the array.


console.log(gameName.split('-'));
// `gameName` is "hitesh-hc-com"
// Splits the string wherever '-' is encountered.
// Output: ["hitesh", "hc", "com"] (an array of substrings)

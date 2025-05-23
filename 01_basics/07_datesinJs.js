// Dates in JavaScript:
// The `Date` object is used to work with dates and times.
// It creates a date instance representing a single moment in time.
// Dates are complex because they involve time zones, daylight saving, leap years, etc.

let myDate = new Date()
// Creating a Date Instance:
// When called without arguments, `new Date()` creates a Date object
// for the current date and time according to the client's system settings.

// console.log(myDate.toString());
// Date.prototype.toString():
// Returns a string representing the specified Date object in a human-readable format.
// This output includes timezone information.
// Output (example): "Thu May 23 2025 17:28:05 GMT+0530 (India Standard Time)"

// console.log(myDate.toDateString());
// Date.prototype.toDateString():
// Returns the date portion of a Date object as a human-readable string.
// It only includes the day of the week, month, day of the month, and year.
// Output (example): "Thu May 23 2025"

// console.log(myDate.toLocaleString());
// Date.prototype.toLocaleString():
// Returns a string representation of the date and time, using the local conventions.
// This is often more user-friendly as it considers local formatting for numbers, dates, and times.
// Output (example): "5/23/2025, 5:28:05 PM" (format depends on locale)

// console.log(typeof myDate);
// Type of Date Object:
// A `Date` object is indeed an object in JavaScript.
// Output: "object"


// --- Creating Specific Dates ---

// let myCreatedDate = new Date(2023, 0, 23)
// Creating Date with (Year, Month, Day) - Month is 0-indexed:
// Months in JavaScript's `Date` object are 0-indexed (0 for January, 1 for February, ..., 11 for December).
// So, `0` represents January.
// Output for `new Date(2023, 0, 23).toLocaleString()`: "1/23/2023, 12:00:00 AM"

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// Creating Date with (Year, Month, Day, Hour, Minute, Second, Millisecond):
// You can specify time components as well.
// Output for `new Date(2023, 0, 23, 5, 3).toLocaleString()`: "1/23/2023, 5:03:00 AM"

// let myCreatedDate = new Date("2023-01-14")
// Creating Date from String (YYYY-MM-DD):
// This format (`YYYY-MM-DD`) is generally reliable and recommended as it's ISO 8601 compliant.
// It's parsed as UTC (Coordinated Universal Time) unless time zone info is included.
// Output for `new Date("2023-01-14").toLocaleString()`: "1/14/2023, 5:30:00 AM" (if your local timezone is IST +5:30)

let myCreatedDate = new Date("01-14-2023")
// Creating Date from String (MM-DD-YYYY):
// This format (`MM-DD-YYYY`) is also common but can sometimes lead to ambiguity depending on the browser/environment.
// It's generally parsed as local time.
// console.log(myCreatedDate.toLocaleString());
// Output: "1/14/2023, 12:00:00 AM"


// --- Timestamps ---

let myTimeStamp = Date.now()
// Date.now():
// Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC (Unix Epoch).
// This is useful for measuring time intervals or creating unique IDs.
// console.log(myTimeStamp); // Output: (a large number representing milliseconds)

// console.log(myCreatedDate.getTime());
// Date.prototype.getTime():
// Returns the number of milliseconds since the Unix Epoch for a specific Date object.
// This allows for easy comparison between different dates or calculating durations.
// Output: (milliseconds for "01-14-2023")

// console.log(Math.floor(Date.now()/1000));
// Getting Timestamp in Seconds:
// Divide the millisecond timestamp by 1000 and use `Math.floor()` to get seconds.
// This is often used in APIs or databases that prefer second-based timestamps.
// Output: (a large number representing seconds)


// --- Getting Specific Date Components ---

let newDate = new Date()
console.log(newDate);
// Output: (Current date and time)

console.log(newDate.getMonth() + 1);
// Date.prototype.getMonth():
// Returns the month (0-11) in the specified date according to local time.
// We add `+ 1` to get the conventional month number (1 for Jan, 12 for Dec).
// Output: (e.g., 5 for May)

console.log(newDate.getDay());
// Date.prototype.getDay():
// Returns the day of the week (0-6) for the specified date according to local time.
// 0 for Sunday, 1 for Monday, ..., 6 for Saturday.
// Output: (e.g., 4 for Thursday)

// `${newDate.getDay()} and the time `
// String Interpolation with Date Methods:
// You can directly embed these method calls within template literals for dynamic strings.
// Example: `console.log(`Today is ${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}`);`


// --- Customizing Date Formatting with toLocaleString() ---

// newDate.toLocaleString('default', {
//     weekday: "long",
//     // You can add many other options like:
//     // year: "numeric",
//     // month: "long",
//     // day: "numeric",
//     // hour: "2-digit",
//     // minute: "2-digit",
//     // second: "2-digit",
//     // timeZone: "Asia/Kolkata" // Specify a timezone if needed
// })
// toLocaleString with Options:
// This method is incredibly powerful for customizing the output format of a date.
// The first argument `default` tells it to use the default locale of the environment.
// The second argument is an options object where you can specify various formatting preferences.
// `weekday: "long"` will display the full name of the day (e.g., "Thursday").
// Example: `console.log(newDate.toLocaleString('en-US', { weekday: "long", year: "numeric", month: "long", day: "numeric" }));`
// Output (example): "Thursday, May 23, 2025"

let booleanValue: boolean = true;

// Literal value
booleanValue = false;

booleanValue = typeof 'abc' === 'string';
booleanValue = 1 > 0;

/*
For these, typescript will complain. and more over null and undefined not consider as falsy values

booleanValue = {};
booleanValue = 'New York';
booleanValue = null;
booleanValue = undefined;
*/

// Basic usage:
let isLogged: boolean = true;
let isHidden: boolean = false;

console.log(isLogged); // Output: true
console.log(isHidden); // Output: false

// Conditionals:
let isDay: boolean = true;
if (isDay) {
  console.log("It's daytime.");
} else {
  console.log("It's nighttime.");
}

// Function parameters and return types:
function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false

// Logical operators:
let hasPermission: boolean = true;
let isAdmin: boolean = false;

// Using logical AND operator
let canAccessResource: boolean = hasPermission && isAdmin;
console.log(canAccessResource); // Output: false

// Using logical OR operator
let canEditDocument: boolean = hasPermission || isAdmin;
console.log(canEditDocument); // Output: true

// Using logical NOT operator
let isLoggedIn: boolean = true;
let isLoggedOut: boolean = !isLoggedIn;
console.log(isLoggedOut); // Output: false

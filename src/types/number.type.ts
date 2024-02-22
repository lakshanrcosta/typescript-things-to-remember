let number: number = 1000;

number = 28.7;
number = -300;
number = Infinity * 0.01;
number = parseInt('12');
number = parseFloat('32');

// Function parameters and return types:
function square(number: number): number {
  return number * number;
}

console.log(square(5)); // Output: 25

// Increment and decrement:
let count: number = 0;
count++; // Increment
console.log(count); // Output: 1

count--; // Decrement
console.log(count); // Output: 0

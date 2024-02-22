// Example one
// Index signature for accessing properties by string keys:
interface Dictionary {
  [key: string]: number;
}

const ages: Dictionary = {
  John: 30,
  Alice: 25,
  Bob: 35,
};

console.log(ages['John']); // Output: 30
console.log(ages['Alice']); // Output: 25

// Example two
// Index signature for accessing properties by numeric keys:
interface NumberArray {
  [index: number]: number;
}

const numbers: NumberArray = [1, 2, 3, 4, 5];

console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3

// Example three
// Combining index signatures with other properties:
interface UserData {
  [key: string]: string | number;
  id: number;
  name: string;
}

const user: UserData = {
  id: 123,
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

console.log(user.id); // Output: 123
console.log(user.name); // Output: John
console.log(user.age); // Output: 30
console.log(user.email); // Output: john@example.com

// Example four
// Readonly index signature:
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

const fruits: ReadonlyStringArray = ['Apple', 'Banana', 'Orange'];

// fruits[0] = "Mango"; // Error: Index signature in type 'ReadonlyStringArray' only permits reading

// Example one

type Circle = { type: 'circle'; radius: number };
type Square = { type: 'square'; sideLength: number };

let shape: Circle | Square;

shape = { type: 'circle', radius: 5 }; // Valid
shape = { type: 'square', sideLength: 4 }; // Valid

// Example two
type Car = { type: 'car'; brand: string; model: string };
type Bicycle = { type: 'bicycle'; color: string };

let vehicle: Car | Bicycle;

vehicle = { type: 'car', brand: 'Toyota', model: 'Camry' }; // Valid
vehicle = { type: 'bicycle', color: 'blue' };

// Example three
type Employee = { name: string; id: number; salary?: number };
type Customer = { name: string; customerId: string };

let person: Employee | Customer;

person = { name: 'John', id: 123 }; // Valid
person = { name: 'Alice', customerId: 'ABC123' }; // Valid

// Example four
type Person = { name: string; age: number };
type LocationPint = { cityName: string; country: string };

let info: Person | LocationPint | string;

info = { name: 'Bob', age: 30 }; // Valid
info = { cityName: 'New York', country: 'USA' }; // Valid
info = 'Some string'; // Valid

// Basic usage:

let variable: any = 10;
variable = 'Hello';
variable = true;

// Arrays with mixed types:
let mixedArray: any[] = [1, 'two', true];

// Function parameters and return types:
function processAnyData(data: any): any {
  // Perform some processing
  return data;
}

// Interacting with existing JavaScript code:
declare let jQuery: any;

// You can call any method on jQuery without TypeScript checking
jQuery('.selector').hide();

// Parsing JSON data:
const jsonStr = '{"name": "John", "age": 30}';
const parsedData: any = JSON.parse(jsonStr);

console.log(parsedData.name); // Output: John
console.log(parsedData.age); // Output: 30

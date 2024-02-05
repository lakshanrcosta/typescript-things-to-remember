// When number type is unknown typescript throws an error stating that 'number' is of type 'unknown'
function multiplyByTwo(number: unknown) {
  // Throws an error
  // return number * 2;

  // Not throws an error
  if (typeof number === 'number') {
    return number * 2;
  }

  return 'Please provide a valid number';
}

console.log(multiplyByTwo(4));
// Out => 8
console.log(multiplyByTwo('John'));
// Out => Please provide a valid number

/* Difference between unknown type and any type
When use any type instead of unknown
*/
function multiplyByThree(number: any) {
  // Typescript will not throw an error. It allows to pass any type of value to number parameter
  return number * 3;
}

console.log(multiplyByThree(4));
// Out => 12
console.log(multiplyByThree('John'));
// Out => NaN

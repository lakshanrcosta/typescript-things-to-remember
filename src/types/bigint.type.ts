// Using constructor method
let bigInt1 = BigInt(252254547);

// Type inference
let bigInt2 = 123456752n;
console.log(bigInt1, bigInt2);

const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne, safeIntPlusTwo);
// This will out the same number as safeInt. Javascript cannot add any number to the safeInt

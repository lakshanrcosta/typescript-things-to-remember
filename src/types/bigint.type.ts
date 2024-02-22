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

const a: bigint = BigInt(123456789);

const b: bigint = 234585985569856n;

let c = a - b;

// const e: bigint = 24552.2n
// A bigint literal must be an integer. && Type 'number' is not assignable to type 'bigint'

// const log = Math.log(c);
// Argument of type 'bigint' is not assignable to parameter of type 'number'
// Math does not work with bigInt

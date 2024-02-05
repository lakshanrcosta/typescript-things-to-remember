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

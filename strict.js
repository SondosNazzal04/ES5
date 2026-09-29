"use strict"
let x = 0;
// y = 9;
let object = {};
Object.defineProperties(object, {
	property1: {
		value: 100,
		writable: false,
	}
});

// delete x;
// delete object;
// delete object.property1;

try
{
	nonExistent();
}
catch (error)
{
	console.log('function does not exist');
}

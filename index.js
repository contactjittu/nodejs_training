const util = require('util');


console.log('Hello %s from %s', 'Jitendra', {city: 'Pune'}) // Hello Jitendra from [object Object]
console.log('t', {city: 'Pune'}) // t { city: 'Pune' }
console.log(util.inspect({city: 'Pune'})) // '{ city: \'Pune\' }'


const txt = 'Congratulate %s on his %dth birthday!';
const result = util.format(txt, 'Linus', 6);

console.log(result);

/*
Method	Description
debuglog()	Writes debug messages to the error object
deprecate()	Marks the specified function as deprecated
format()	Formats the specified string, using the specified arguments
inherits()	Inherits methods from one function into another
inspect()	Inspects the specified object and returns the object as a string
*/
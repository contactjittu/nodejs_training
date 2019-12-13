// REST parameters
function sumAll(...args) { // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

console.log(sumAll(9, 2, 4, 7, 1, 10));

let words = ['never', 'fully'];
console.log(['Will', ...words, 'understand'])
// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 2));

// exports
// const calc2 = require("./test-module-2");
// console.log(calc2.multiply(4, 4));

const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(5, 5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

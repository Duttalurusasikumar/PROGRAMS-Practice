//JavaScript: Check whether it is possible to replace $ in a specified expression

function check_arithmetic_Expression(x, y, z) {
  return x + y == z || x * y == z || x / y == z || x - y == z;
}

console.log(check_arithmetic_Expression(10, 25, 35))
console.log(check_arithmetic_Expression(10, 25, 250))
console.log(check_arithmetic_Expression(30, 25, 5))
console.log(check_arithmetic_Expression(100, 25, 4.0))
console.log(check_arithmetic_Expression(100, 25, 25))

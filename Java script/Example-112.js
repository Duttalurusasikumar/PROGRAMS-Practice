//JavaScript: Find the number of trailing zeros in the decimal representation of the factorial of a given number

function trailing_zeros_factorial(n) {
    var result = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(trailing_zeros_factorial(8))
console.log(trailing_zeros_factorial(9))
console.log(trailing_zeros_factorial(10))

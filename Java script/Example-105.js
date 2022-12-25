//JavaScript: Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number

function digit_to_one(num) {

    var digitSum = function(num) {

        var digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num / 10);
        }

        return digit_sum;
    };

    var result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }

    return result;
}

console.log(digit_to_one(123))
console.log(digit_to_one(156))

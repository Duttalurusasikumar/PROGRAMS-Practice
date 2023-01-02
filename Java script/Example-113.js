//JavaScript: Calculate the sum of n + n/2 + n/4 + n/8 + ....

function int_sum(num) {
    var s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
}
console.log(int_sum(8))
console.log(int_sum(9))
console.log(int_sum(26))

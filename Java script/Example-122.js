//JavaScript: Check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence


function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]))
console.log(is_monotonous([-3, -2, -1]))

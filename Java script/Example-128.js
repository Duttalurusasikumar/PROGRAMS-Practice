//JavaScript: Find the smallest round number that is not less than a given value

function nearest_round_number(num) {
    while (num % 10) {
        num++;
    }
    return num;
}

console.log(nearest_round_number(56));
console.log(nearest_round_number(592));

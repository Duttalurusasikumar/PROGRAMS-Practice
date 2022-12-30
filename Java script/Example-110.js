//JavaScript: Find the number of even values in sequence before the first occurrence of a given number

function find_numbers(arr_num, num) {
    var result = 0;
    for (var i = 0; i < arr_num.length; i++)
    {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
            result++;
        }
        if (arr_num[i] === num) 
        {
            return result;
        }
    }
    return -1;
}

console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
console.log(find_numbers([1,3,5,6,7,8], 6))

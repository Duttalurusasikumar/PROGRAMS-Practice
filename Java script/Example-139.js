//JavaScript: Find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number

function find_rightmost_round_number(input_arr) {

  var result = 0;
  for (var i = 0; i < input_arr.length; i++)
  {
    if (input_arr[i] % 10 === 0) {
      result = i;
    }
  }

  return result;
}

console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));

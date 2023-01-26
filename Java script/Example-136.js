//JavaScript: Replace the first digit in a string (should contains at least digit) with $ character

function replace_first_digit(input_str) {

  return input_str.replace(/[0-9]/, '$');
}
console.log(replace_first_digit("abc1dabc"));
console.log(replace_first_digit("p3ython"));
console.log(replace_first_digit("ab1cabc"));   

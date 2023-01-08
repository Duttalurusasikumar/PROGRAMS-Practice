//JavaScript: Check whether a given integer has an increasing digits sequence

function is_increasing_digits_Sequence(num) {

  var arr_num = ('' + num).split('');

  for (var i = 0; i < arr_num.length - 1; i++) {
    if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
      return false;
    }
  return true;
}

console.log(is_increasing_digits_Sequence(123));
console.log(is_increasing_digits_Sequence(1223));
console.log(is_increasing_digits_Sequence(45677));

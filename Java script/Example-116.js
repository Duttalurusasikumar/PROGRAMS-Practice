//JavaScript: Find all the possible options to replace the hash in a string

function is_divisible_by3(mask_str) {

  var digitSum = 0,
    left = '0'.charCodeAt(),
    right = '9'.charCodeAt(),
    result = [],
    mask_data = mask_str.split(''),
    hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right)
    {
      digitSum += mask_data[i].charCodeAt() - left;
    } 
    else 
    {
      hash_pos = i;
    }
  }

  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      result.push(mask_data.join(''));
    }
  }

  return result;
}

console.log(is_divisible_by3("2#0"))
console.log(is_divisible_by3("4#2"))

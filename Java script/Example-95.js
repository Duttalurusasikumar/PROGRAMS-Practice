//JavaScript: Replace all the numbers with a specified number of a given array of integers


function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: "+num);
console.log(array_element_replace(num, 2, 5));

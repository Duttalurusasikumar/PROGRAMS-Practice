//JavaScript: Find the larger value between the first or last and set all the other elements with that value

function all_max(nums) 
 {
    var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;

    return nums;
}
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));

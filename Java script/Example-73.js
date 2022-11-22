//JavaScript: Reverse the elements of a given array of integers length 3

function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));

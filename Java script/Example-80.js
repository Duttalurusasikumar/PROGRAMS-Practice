//JavaScript: Swap the first and last elements of a given array of integers

function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}
console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 

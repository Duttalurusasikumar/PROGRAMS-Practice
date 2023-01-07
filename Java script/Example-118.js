//JavaScript: Check whether a given number is in a given range

function is_inrange(x, y, z) 
{
    return y >= x && y <= z;
}

console.log(is_inrange(1,2,3));
console.log(is_inrange(1,2,-3));
console.log(is_inrange(1.1,1.2,1.3));

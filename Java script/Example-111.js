//JavaScript: Check a number from three given numbers where two numbers are equal, find the third one

function find_third_number(x, y, z) {
   if((x!==y) && (x!==z) && (y!==z))
    return "Three numbers are unequal.";
	if(x==y) return z;
	if(x==z) return y;
	return x;
}

console.log(find_third_number(1,2,2))
console.log(find_third_number(1,1,2))
console.log(find_third_number(1,2,3))

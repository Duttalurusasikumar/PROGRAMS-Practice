//JavaScript: Check from two given non-negative integers that whether one of the number is multiple of 7 or 11



function valCheck (a, b) {
if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
}
else
return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));

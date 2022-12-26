//JavaScript: Divide an integer by another integer as long as the result is an integer and return the result

function divide_digit(num, d) {
       if (d==1)
         return num;
       else
       {
      while (num % d === 0) {
        num /= d;
        }
    return num;
       }
}
console.log(divide_digit(-12, 2))
console.log(divide_digit(13, 2))
console.log(divide_digit(13, 1))

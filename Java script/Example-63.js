//JavaScript: Create a string using the middle three characters of a given string of odd length


function middle_three(str) {
   if (str.length % 2!= 0) {
   
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
    }
  return str;
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));

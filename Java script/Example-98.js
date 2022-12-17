//JavaScript: Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case

function change_case(new_str) {
  var x = 0;
  var y = 0;

  for (var i = 0; i < new_str.length; i++) {
    if (/[A-Z]/.test(new_str[i])) {
      x++;
    } else y++;
  }

  if (y > x) return new_str.toLowerCase();
  return new_str.toUpperCase();
}

console.log(change_case("Write"))
console.log(change_case("PHp"))

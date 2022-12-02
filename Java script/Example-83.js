//JavaScript: Find the longest string from a given array of strings

function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}

console.log(longest_string(['a', 'aa', 'aaa',
                                          'aaaaa','aaaa']))

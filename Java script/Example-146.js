//JavaScript: Compute the sum of cubes of all integer from 1 to an given integer

function sum_Of_Cubes(n) {
  var sumn = 0;

  for (var i = 1; i <= n; i++) {
    sumn += Math.pow(i, 3);
  }
  return sumn;
}

console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));

//JavaScript: Get the largest even number from an array of integers

function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));

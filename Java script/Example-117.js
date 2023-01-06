//JavaScript: Check whether a given matrix is an identity matrix

function is_identity_Matrix(matrix_data) {
//Checks whether given matrix is a square matrix or not
for (var i = 0; i < matrix_data.length; i++)
  {
    rows = matrix_data.length;
cols = matrix_data[i].length;
if(rows != cols)
  {
   console.log("Matrix should be a square matrix");
   return false;
  }
  }
  for (var i = 0; i < matrix_data.length; i++)
   {
    for (var j = 0; j < matrix_data.length; j++)
     {
      if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
      {
        return false;
      }
    }
  }
  return true;
}
console.log(is_identity_Matrix([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]])) 

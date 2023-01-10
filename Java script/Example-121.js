//JavaScript: Check whether a given matrix is lower triangular or not

function lower_triangular_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) 
         {
        for (var j = 0; j < user_matrix[0].length; j++) 
            {
            if (j > i && user_matrix[i][j] !== 0)
              return false;
        }
    }
    return true;
}

console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));

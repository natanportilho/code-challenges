/* Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
write a method to rotate the image by 90 degrees. Can you do this in place? */

function roration(mat){
    for (var layer = 0; layer < mat.length/2; layer++){
        var first = layer;
        var last = mat.length - 1 - layer;

        for (var i = first; i < last; i++){
            var offset = i - first;
            var topLeft = mat[first][i];

            mat[first][i] = mat[last-offset][first];
            mat[last-offset][first] = mat[last][last-offset];
            mat[last][last-offset] = mat[i][last];
            mat[i][last] =topLeft;
        }
    }
    return mat;
}

var matrix = [[7,5,8],[9,12,0],[3,1,4]];
console.log(roration(matrix));

function rotate(matrix) {
    const numberOfLayers = Math.floor(matrix.length/ 2);
    const last = matrix.length - 1;

    for (let i = 0; i < numberOfLayers; i++) {
       for (let j = i; j < last - i; j++) {
          k = matrix[i][j];
          matrix[i][j] = matrix[last - j][i];
          matrix[last - j][i] = matrix[last - i][last - j];
          matrix[last - i][last - j] = matrix[j][last - i]
          matrix[j][last - i] = k
       }
    }
    return matrix;
  }
  var mat = [[7,5,8],[9,12,0],[3,1,4]];
  console.log(rotate(mat));
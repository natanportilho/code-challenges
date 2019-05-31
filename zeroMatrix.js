/* Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0. */

class Coordinate {
    constructor(line, column) {
        this.line = line;
        this.column = column;
    }
}
function zeroMatrixInPlace(mat){
    var coordinates = new Array();
    for (var line = 0; line < mat.length; line++){
        for (var column = 0; column < mat[line].length; column++){
            if (mat[line][column] == 0){
                var coordinate = new Coordinate(line, column);
                coordinates.push(coordinate);
            }
        }
    }

    for (var i = 0; i < coordinates.length; i++){
        var line = coordinates[i].line;
        var column = coordinates[i].column;
        fillWithZero(mat,line, column);
    }

    return mat;
}

var matrix = [[7,8,0,1,2],[4,8,7,12,9],[1,1,2,4,11], [3,0,7,4,2],[4,7,9,2,0]];
console.log(zeroMatrixInPlace(matrix));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function zeroMatrix(mat){
    var mat2 = makeACopy(mat);
    for (var line = 0; line < mat.length; line++){
        for (var column = 0; column < mat[line].length; column++){
            if (mat[line][column] == 0){
                fillWithZero(mat2, line, column);
            }
        }
    }
    return mat2;
}

function fillWithZero(mat,line, column){
    for (var c = 0; c < mat[line].length; c++){
        mat[line][c] = 0;
    }
    for (var l = 0; l < mat.length; l++){
        mat[l][column] = 0;
    }
}

function makeACopy(mat){
    var newArray = mat.map(function(arr) {
        return arr.slice();
    });
    return newArray;
}

var matrix2 = [[7,8,0,1,2],[4,8,7,12,9],[1,1,2,4,11], [3,0,7,4,2],[4,7,9,2,0]];
console.log(zeroMatrix(matrix2));
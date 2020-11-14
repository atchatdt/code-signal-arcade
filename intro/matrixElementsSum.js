// https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr
function matrixElementsSum(matrix) {
    price = 0;
    for (let y = 0; y < matrix.length; y++)
        for (let x = 0; x < matrix[0].length; x++) {
            if (y == 0)
                price += matrix[y][x];
            else {
                if (matrix[y - 1][x] == 0)
                    matrix[y][x] = 0;
                price += matrix[y][x];
            }
        }
    return price;
}


function matrixElementsSum(matrix) {
    for (var r = 0, j = 0; j < matrix[0].length; j++) {
        for (var i = 0; i < matrix.length; i++) {
            if (matrix[i][j] === 0) break
            else r += matrix[i][j]
        }
    }
    return r
}

console.log(matrixElementsSum([[1, 1, 1, 0],
[0, 5, 0, 1],
[2, 1, 3, 10]]))
// https://app.codesignal.com/arcade/intro/level-11/pwRLrkrNpnsbgMndb
// https://benzene-dev.tistory.com/46
function chessKnight(cell) {
    const chessBoard = [
        [2, 3, 4, 4, 4, 4, 3, 2],
        [3, 4, 6, 6, 6, 6, 4, 3],
        [4, 6, 8, 8, 8, 8, 6, 4],
        [4, 6, 8, 8, 8, 8, 6, 4],
        [4, 6, 8, 8, 8, 8, 6, 4],
        [4, 6, 8, 8, 8, 8, 6, 4],
        [3, 4, 6, 6, 6, 6, 4, 3],
        [2, 3, 4, 4, 4, 4, 3, 2],
    ]

    const x = cell[0].charCodeAt() - 97;
    console.log(x)
    return chessBoard[cell[1] - 1][x]
}


function chessKnight(cell) {
    let [x, y] = cell.split('');
    // Các vị trí có thể di chuyển
    let arrMove = [[1, 2], [2, 1], [1, -2], [-2, 1], [-1, 2], [2, -1], [-1, -2], [-2, -1]]
    let count = 0
    for (let i = 0; i < arrMove.length; i++) {
        let arrCurrent = arrMove[i]
        let sum1 = x.toLocaleString().charCodeAt(0) + arrCurrent[0]
        let sum2 = parseInt(y) + arrCurrent[1]  //arrCurrent[1].toLocaleString().charCodeAt(0) + y
        if ((97 <= sum1 && sum1 <= 104) && (1 <= sum2 && sum2 <=8)){
            count+=1
        }
    }
    return count
}

console.log(chessKnight('a1'))
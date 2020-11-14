// https://app.codesignal.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo
function bishopAndPawn(bishop, pawn) {
    let broad = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    }

    let broadX = broad[bishop[0]]
    let broadY = parseInt(bishop[1])

    let pawnX = broad[pawn[0]]
    let pawnY = parseInt(pawn[1]);

    console.log({
        broadX,
        broadY,
        pawnX, pawnY
    })
    if ((broadX + broadY === pawnX + pawnY) && (broadX + pawnY === broadY + pawnX)) {
        return true
    }
    return false
}
function bishopAndPawn(bishop, pawn) {
    return Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) === Math.abs(bishop[1] - pawn[1])
}

bishopAndPawn('a1', 'c3')
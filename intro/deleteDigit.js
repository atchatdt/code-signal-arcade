// https://app.codesignal.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX/solutions

function deleteDigit(n) {
    let max = Math.max()
    let i = 0;
    let arrStr = n.toString().split('')
    while (i < arrStr.length) {
        let arrStr2 = n.toString().split('')
        arrStr2.splice(i, 1)
        let num = parseInt(arrStr2.join(''))
        if (num > max) {
            max = num
        }

        i++
    }
    return max
}



function deleteDigit(n) {
    n = n + ''
    let max = Math.max()
    for (let i = 0; i < n.length; i++) {
        let num = n.slice(0, i) + n.slice(i + 1)
        if (+num > max) {
            max = +num
        }
    }
    return max
}

console.log(deleteDigit(1001))

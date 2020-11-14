function rangeBitCount(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    let arrResult = arr.map(num => num.toString(2))
    let result = arrResult.map(num => num.split('').reduce((a, b) => a + parseInt(b), 0)).reduce((x, y) => x + y, 0)
    return result
}

console.log(rangeBitCount(2, 7))
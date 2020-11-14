// https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq
function absoluteValuesSumMinimization(a) {
    let min = Math.min()
    let index = 0
    a.map(function (x, i, arr) {

        let value = arr.reduce((c, d) => c + Math.abs(x - d), 0)
        if (value < min) {
            min = value
            index = i
        }
    })
    return a[index]
}

function absoluteValuesSumMinimization(A) {
    return A[Math.ceil(A.length / 2) - 1];
}

console.log(absoluteValuesSumMinimization([0, 10, 9]))
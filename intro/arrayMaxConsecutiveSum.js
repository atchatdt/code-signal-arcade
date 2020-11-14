// https://app.codesignal.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5
function arrayMaxConsecutiveSum(inputArray, k) {
    let max = Math.max()
    for (let i = 0; i < inputArray.length ; i++) {
        let a = sum(inputArray.slice(i, i + k))
        if (a > max) {
            max = a
        }
    }
    return max
}
let sum = arr => arr.reduce((a, c) => a + c, 0)


console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3))
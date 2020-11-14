// https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5
function avoidObstacles(arr) {
    for (let n = 1;; n++) {
        if (arr.every(function (x) {
                console.log(Boolean(x % n))
                return x % n
            })) return n

    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]))
// console.log(avoidObstacles([1, 2, 4, 6, 10]))
// console.log(avoidObstacles([1000, 999]))
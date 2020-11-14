function largestNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum * 10 + 9
    }
    return sum;
}
function largestNumber(n) {
    return Math.pow(10, n) - 1
}
let result = largestNumber(9)
console.log(result)
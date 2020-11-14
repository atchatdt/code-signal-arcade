function candies(n, m) {
    return parseInt(m / n) * n;
}
function candies(n, m) {
    return m - m % n;
}

console.log(candies(3, 10))


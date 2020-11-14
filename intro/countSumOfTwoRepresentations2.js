function countSumOfTwoRepresentations2(n, l, r) {
    if (r == l && r + l == n) {
        return 1
    }
    let re = 0
    for (let i = l; i <= r; i++) {
        let h = n - i
        if (h >= i && h <= r) {
            console.log(h)
            re++
        }
    }
    console.log({
        re
    })
    return re
}
countSumOfTwoRepresentations2(24, 8, 16)
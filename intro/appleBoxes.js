// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/scG8AFsPuqQGx8Qjf/
function appleBoxes(k) {
    let arrEven = []
    let arrOdd = []
    for (let i = 1; i <= k; i++) {
        if (i % 2 == 0) {
            arrEven.push(i)
        } else {
            arrOdd.push(i)
        }
    }
    return a(arrEven) - a(arrOdd)
}

let a = x => x.map(y => y ** 2).reduce((b, c) => b + c, 0)

function appleBoxes(k) {
    return k * (k + 1) / (k % 2 ? -2 : 2);
}
console.log(appleBoxes(5))

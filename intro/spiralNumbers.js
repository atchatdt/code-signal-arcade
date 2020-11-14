console.clear()
function spiralNumbers(n) {
    let res = Array(n * n).fill(null).map((el, i) => i + 1);
    let m = [];
    let i = 0;
    console.log(res)
    while (res.length) {
        m.reverse();
        m = m.length ? m[0].map((col, i) => m.map(row => row[i])) : m;
        console.log({m})
        m.unshift(res.splice(-(Math.floor(i / 2) + 1)));
        console.log({m})
        i++;
        console.log('**********************************************************')
    }
    return m;
}

spiralNumbers(3)

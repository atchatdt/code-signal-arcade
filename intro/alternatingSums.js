// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9
function alternatingSums(a) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            even += a[i];
        } else {
            odd += a[i];
        }
    }
    return [even, odd];
}

var alternatingSums = a => a.reduce((p, v, i) => {
    console.log(p[i & 1])
    return(p[i & 1] += v, p)
}, [0, 0])

let arr = [50, 60, 60, 45, 70];
let result = alternatingSums(arr);
console.log(result);
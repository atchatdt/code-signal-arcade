// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM
function sortByHeight(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] != -1) {
            for (let j = i + 1; j < a.length; j++) {
                if (a[j] != -1 && (a[i] > a[j])) {
                    [a[i], a[j]] = [a[j], a[i]]
                }
            }
        }
    }
    return a;
}

function sortByHeight(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        return -1;
    })
}

let a = [-1, 150, 190, 170, -1, -1, 160, 180]
let result = sortByHeight(a);
console.log(result)
// https://app.codesignal.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ
function differentSymbolsNaive(s) {
    let arr = s.split('')
    let arrResult = []
    for (let i = 0; i < arr.length; i++) {
        if (!arrResult.includes(arr[i])) {
            arrResult.push(arr[i])
        }
    }
    return arrResult.length
}

function differentSymbolsNaive(s) {
    return new Set(s).size
}

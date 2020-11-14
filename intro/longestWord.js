// https://app.codesignal.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma

function longestWord(text) {
    let arr = text.split(/[^a-zA-Z]/g)
    let max = Math.max()
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].trim().replace(/[^a-zA-Z]/g, '')
        if (str.length > max) {
            max = str.length
            result = str
        }
    }
    return result
}

function longestWord(text) {
    return text.match(/[A-Za-z]+/g).sort((a, b) => { return b.length > a.length })[0];
}


console.log(longestWord(''))
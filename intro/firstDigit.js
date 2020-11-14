// https://app.codesignal.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov
function firstDigit(inputString) {
    let arr = inputString.split('')
    arr = arr.filter(x => Boolean(x))
    for (let i = 0; i < arr.length; i++) {
        let charCode = arr[i].charCodeAt(0)
        console.log({
            a: arr[i],
            charCode
        })
        if (charCode <= 57 && charCode >= 48) {
            return arr[i]
        }
    }
}


console.log(firstDigit('a a_933'))
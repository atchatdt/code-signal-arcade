// https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso
function isIPv4Address(s) {
    var r = s.split(".")
    return r.length === 4 && r.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256)
}

function isIPv4Address(inputString) {
    let arr = inputString.split('.')
    if (arr.length < 4 || arr.length > 4) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (/^\D+$/.test(arr[i])) {
            return false
        }
        if (/^\d+$/.test(arr[i])) {
            if (arr[i].startsWith(0) && arr[i].length > 1) {
                return false
            }
            let num = parseInt(arr[i], 10)
            if (num > 255 || num < 0) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}
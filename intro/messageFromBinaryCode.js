// https://app.codesignal.com/arcade/intro/level-12/sCpwzJCyBy2tDSxKW

function messageFromBinaryCode(code) {
    let strResult = ''

    for (let i = 0; i < code.length; i += 8) {
        let str = code.slice(i, i + 8)
        strResult += String.fromCharCode(parseInt(str, 2))
    }
    return strResult
}
function messageFromBinaryCode(code) {
    return code.match(/.{8}/g).reduce((a, b) => a + String.fromCharCode(parseInt(b, 2)), "")
}

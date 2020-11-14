// https://app.codesignal.com/arcade/intro/level-11/o2uq6eTuvk7atGadR
function lineEncoding(s) {
    let charBefore = ''
    let strResult = ''
    let count = 1
    for (let i = 0; i < s.length; i++) {
        if (charBefore == s[i]) {
            continue
        }
        charBefore = s[i]
        for (let j = i + 1; j < s.length; j++) {
            if (s[j] === charBefore) {
                count += 1
            } else {
                break
            }
        }
        strResult += ((count != 1) ? (`${count}${charBefore}`) : charBefore)
        count = 1

    }

    return strResult
}


var lineEncoding = s =>
    s.replace(
        /(.)\1*/g, 
        (e,i) => i==e ? i : e.length+i
    )

console.log(lineEncoding('aabbbca'))

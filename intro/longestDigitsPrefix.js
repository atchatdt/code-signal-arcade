// https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3

function longestDigitsPrefix(inputString) {
    let strResult = '';
    for (let i = 0; i < inputString.length; i++) {
        let data = inputString[i]
        let charCode = data.charCodeAt();
        if(charCode > 47 && charCode < 58){
            strResult += data
        }else{
            return strResult
        }
    }
    return strResult
}
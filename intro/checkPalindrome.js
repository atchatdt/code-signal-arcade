// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
function checkPalindrome(inputString) {
    let result = inputString.split('');
    result = result.reverse();
    // let str = result.reduce((x, y) => x + y, '')
    let str = result.join('');
    if (str == inputString) {
        return true;
    }
    return false;
}

function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}



console.log(checkPalindrome('aba'));
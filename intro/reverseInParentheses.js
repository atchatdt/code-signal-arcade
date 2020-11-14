// https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6
function reverseInParentheses(inputString) {
    if (inputString.includes('(')) {
        return reverseInParentheses(reverseOnce(inputString));
    } else {
        return inputString;
    }
}

function reverseOnce(s) {
    let regexp = /\(([^()]*)\)/i;
    let subStr = regexp.exec(s)[1];
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}


let result = reverseInParentheses('((ba)r)');
console.log(result)
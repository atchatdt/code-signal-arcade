// https://app.codesignal.com/arcade/intro/level-10/HJ2thsvjL25iCvvdm

function isMAC48Address(inputString) {
    let a = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/g;
    return a.test(inputString)

}

console.log(isMAC48Address('00-1B-63-84-45-E6'))
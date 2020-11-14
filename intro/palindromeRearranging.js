// https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

function palindromeRearranging(inputString) {
    let charArray = inputString.split("");
    let letterObject = {};
    for (let i = 0; i < charArray.length; i++) {
        if (!letterObject.hasOwnProperty(charArray[i])) {
            letterObject[charArray[i]] = 1;
        } else {
            letterObject[charArray[i]]++;
        }
    }

    let count = 0;
    for(key in letterObject){
        if(letterObject[key] % 2 !== 0){
            count++;
        }
    }

    console.log(count)
    console.log(letterObject)
    return count > 1 ? false : true;
}

let result = palindromeRearranging("abbbb")
console.log({result})
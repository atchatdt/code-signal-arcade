// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL
function allLongestStrings(inputArray) {
    let lengthMax = Math.max();
    let arrResult = [];
    for (let i = 0; i < inputArray.length; i++) {
        let lengthStr = inputArray[i].length;
        if (lengthStr > lengthMax) {
            lengthMax = lengthStr;
            arrResult.length = 0;
            arrResult.push(inputArray[i]);
        }
        else if (lengthStr == lengthMax) {
            arrResult.push(inputArray[i]);
        }
    }
    return arrResult;
}

function allLongestStrings2(inputArray) {
    let maxSize = Math.max(...(inputArray).map(x => x.length));
    return inputArray.filter(x => x.length === maxSize)
}

console.log(allLongestStrings2(["aba", "aa", "ad", "vcd", "aba"]))

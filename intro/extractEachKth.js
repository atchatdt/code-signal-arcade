// https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R/

function extractEachKth(inputArray, k) {
    let result = []
    for (let i = 0; i < inputArray.length; i++) {
        if (((i + 1) % k) != 0) {
            console.log(i)
            result.push(inputArray[i])
        }
    }
    return result
}
function extractEachKth(arr, k) {
    return arr.filter((_, i) => (i + 1) % k)
}
extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
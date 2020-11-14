// https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE
function arrayMaximalAdjacentDifference(inputArray) {
    let max = Math.max();
    for(let i=0;i<inputArray.length -1;i++){
        let result = inputArray[i] - inputArray[i+1]
        result = Math.abs(result)
        if(result > max){
            max = result
        }
    }
    return max
}

let arr = [2, 4, 1, 0]

let result = arrayMaximalAdjacentDifference(arr)
console.log(result)
// https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg

// Số lượng phải bỏ ra để mảng luông tăng
function arrayChange(inputArray) {
    let count = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            let diff = inputArray[i] + 1 - inputArray[i + 1];
            console.log({ i, num1: inputArray[i], num2: inputArray[i + 1], diff })
            inputArray[i + 1] = inputArray[i] + 1;
            count += diff;
        }
    }
    console.log(inputArray)
    return count;
}

let arr = [3122, -645, 2616, 13213, -8069]

arrayChange(arr)
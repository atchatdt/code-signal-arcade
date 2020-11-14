// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/xzeZqCQjpfDJuN72S

function additionWithoutCarrying(param1, param2) {
    let result = 0;
    let count = 1;

    while (param1 != 0 || param2 != 0) {
        result += (param1 % 10 + param2 % 10) % 10 * count;
        console.log({ result, count })
        count *= 10;
        param1 = parseInt(param1 / 10);
        param2 = parseInt(param2 / 10);
    }

    return result;
}

console.log(additionWithoutCarrying(456, 1734))
// function killKthBit(n, k) {
//     let arr = []
//     let cloneNumber = n
//     while (cloneNumber != 0) {
//         arr.unshift(cloneNumber % 2);
//         cloneNumber = parseInt(cloneNumber / 2);
//     }
//     arr[arr.length - k] = 0
//     let result = 0
//     let dem = 0
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result += (arr[i] * Math.pow(2, dem))
//         dem++
//     }
//    return result
// }

function killKthBit(n, k) {
    return n & ~(1 << k - 1);
}


let result = killKthBit(37, 3)
console.log(result)


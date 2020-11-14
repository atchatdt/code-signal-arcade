// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC
function makeArrayConsecutive2(sequence) {
    return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
}
function makeArrayConsecutive2(statues) {
    statues = statues.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < statues.length - 1; i++) {
        let result = statues[i + 1] - statues[i];
        if (result > 1) {
            count += (result - 1);
        }
    }
    return count;
}

console.log(makeArrayConsecutive2([1,2,3,4]));
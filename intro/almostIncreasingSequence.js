// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG
function almostIncreasingSequence(sequence) {
    let found = false;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            if (found) {
                return false;
            }
            found = true;

            if (i === 1 || i + 1 === sequence.length) {
                continue;
            }
            else if (sequence[i] > sequence[i - 2]) {
                sequence[i - 1] = sequence[i - 2];
            }
            else if (sequence[i - 1] >= sequence[i + 1]) {
                return false;
            }
        }
    }
    return true;
}
console.log(almostIncreasingSequence([1, 2, 1, 2]))
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]))
console.log(almostIncreasingSequence([3, 5, 67, 98, 3]))
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]))
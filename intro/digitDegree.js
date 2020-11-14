// https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo

function digitDegree(n) {
    let arrNumber = n.toString().split('').map(x => parseInt(x, 10));
    let count = 0;
    if (n < 10) {
        return count;
    }
    while (true) {
        let sum = arrNumber.reduce((a, b) => a + b, 0)
        count += 1
        if (sum < 10) {
            return count
        } else {
            arrNumber = sum.toString().split('').map(x => parseInt(x, 10));
        }

    }
}
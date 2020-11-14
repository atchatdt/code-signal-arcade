// https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb/
function depositProfit(deposit, rate, threshold) {
    let result = 1
    while (true) {
        deposit += (rate/100 * deposit)
        console.log({ deposit, result })
        if (deposit > threshold) {
            return result
        }
        result += 1
    }
}


function depositProfit(d, r, t) {
    return Math.ceil(Math.log(t/d)/Math.log(r/100+1));

}

function depositProfit(d, r, t) {
    return Math.ceil(Math.log(t/d)/Math.log(r/100+1));
}

console.log(depositProfit(1, 100, 64))
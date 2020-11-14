function lateRide(n) {
    let hour = parseInt(n / 60);
    let min = n % 60;
    let str = hour + '' + min + ''
    let sum = str.split('').reduce((a,b) => a + parseInt(b),0)
    return sum;
}

console.log(lateRide(808))
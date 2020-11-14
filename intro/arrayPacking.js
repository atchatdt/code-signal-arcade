function arrayPacking(a) {
    const bin = a
        .reverse()
        .map(num => num.toString(2).padStart(8, '0'))
        .join('')
    return parseInt(bin, 2)
}

console.log(arrayPacking([24, 85, 0]))
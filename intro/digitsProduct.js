// https://app.codesignal.com/arcade/intro/level-12/NJJhENpgheFRQbPRA

function digitsProduct(product) {
    for (let i = 0; i <= 10000; i++) {
        if (product < 10 && product > 0) {
            if (i == product) return i
        }
        let num = i
        if (num > 10) {
            num = i.toString().split('').reduce((x, y) => x * y, 1)
        }

        if (i != product && num == product) {
            return i
        }

    }
    return -1
}


console.log(digitsProduct(17))

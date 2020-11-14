// https://app.codesignal.com/arcade/intro/level-10/TXFLopNcCNbJLQivP

function findEmailDomain(address) {
    let arrResult = address.split('@')
    return arrResult[arrResult.length - 1]
}

function findEmailDomain(address) {
    return address.split('@').pop()
}

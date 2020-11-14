// https://app.codesignal.com/arcade/intro/level-12/YqZwMJguZBY7Hz84T

function sumUpNumbers(inputString) {
    // Liệt kê các ký tự không phải là số
    let str = inputString.replace(/[a-zA-Z,!#_\\-\\.$%&*+ ]/gi, ' ').trim()
    return str.split(' ').map(x => x.replace(/[^0-9]/g, '')).filter(Boolean).reduce((x, y) => x + parseInt(y), 0)
}

function sumUpNumbers(inputString) {
    
    console.log(inputString.match(/\d+/g) || [])
    return (inputString.match(/\d+/g) || []).reduce((a, b) => a + +b, 0)
}



console.log(sumUpNumbers('abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -'))
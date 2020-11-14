// https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN
function addBorder(picture) {

    let lengthOfWall = picture[0].length + 2;
    // Cộng thêm số lượng * tương ứng với lengthOfWall
    let wall = "*".repeat(lengthOfWall)
   
    picture.push(wall);
    picture.unshift(wall);
    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }

    return picture;
}

function addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}


let arr = ["abc", "ded"]

let result = addBorder(arr)
console.log(result);
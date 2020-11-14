// https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let max1 = yourLeft > yourRight ? yourLeft : yourRight
    let min1 = yourLeft < yourRight ? yourLeft : yourRight

    let max2 = friendsLeft > friendsRight ? friendsLeft : friendsRight
    let min2 = friendsLeft < friendsRight ? friendsLeft : friendsRight;

    return ((max1 == max2) && (min1 == min2)) ? true : false;

}

function tennisSet(score1, score2) {
    let hieu = Math.abs(score1 - score2);
    if(hieu ==0){
        return false;
    }
    if (hieu == 2 && (score1 == 7 || score2 == 7)) {
        return true
    }
    if (hieu == 1 && (score1 == 7 || score2 == 7)) {
        return true
    }
    if (hieu != 1 && (score1 == 6 || score2 == 6)) {
        return true
    }
    if (hieu != 1 && (score1 > 6 || score2 > 6)) {
        return false
    }
}

let result = tennisSet(7, 6)
console.log(result)

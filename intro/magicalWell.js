function magicalWell(a, b, n) {
    let result = 0;
    while(n!=0){
        result += a*b
        a++
        b++
        n--
    }
    return result
}

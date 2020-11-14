// https://app.codesignal.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5

function validTime(time) {
    let [h,m] = time.split(':')
    
    return (h>=0 && h <= 23) && (m<=59 && m>=0)
}

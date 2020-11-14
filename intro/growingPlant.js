// https://app.codesignal.com/arcade/intro/level-9/xHvruDnQCx7mYom3T

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHight = 0
    let day = 0
    while (currentHight < desiredHeight) {
        day++
        currentHight += upSpeed
        if (currentHight < desiredHeight) {
            currentHight -= downSpeed
        }
    }
    return day
}

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    return upSpeed > desiredHeight ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

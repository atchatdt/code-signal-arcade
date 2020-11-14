// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/8rqs3BLpdKePhouQM/
function lineUp(commands) {
    var result = 0,
        same = true;
    for (var i = 0; i < commands.length; i++) {
        var command = commands[i];
        if (command == 'L' || command == 'R') {
            same = !same;
        }
        if (same) result++;
    }
    return result;
}

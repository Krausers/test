function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function revert(n) {
    var x = 0;
    while (n > 0) {
        x = x * 10 + n % 10;
        n = ~~ (n / 10);
    }
    return x;
}
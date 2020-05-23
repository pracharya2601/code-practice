//find the greates number common divisor of two number
//example: 4, 6 ==2
//example: 2, 3 == 1

function commonDivisor(x, y) {
    if(!y) return y === 0 ? x : NaN
    return commonDivisor(y, x % y);
}
console.log(commonDivisor(20, 75))
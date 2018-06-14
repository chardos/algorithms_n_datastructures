// https://www.hackerrank.com/challenges/extra-long-factorials/problem









// =============================================================================
// FIRST ATTEMPT: failed
// Javascript only supports 53 bit integers, after that information is lost
// =============================================================================

function extraLongFactorials(n, acc = n) {
    if(n === 1) return convert(acc)
    return extraLongFactorials(n-1, acc * (n - 1))
}

function convert(num) {
    const [number, length] = num.toString().split('e+')
    const cleanNum = number.replace(/[.]/g, "");
    const dotPos = number.indexOf('.');
    const padLength = parseInt(dotPos) + parseInt(length)

    const padded = padRight(cleanNum, padLength)

    return num;

}

function padRight(num, length){
    if (num.length === length) return num
    return padRight(num + '0', length)
}

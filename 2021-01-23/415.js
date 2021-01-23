/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let carry = 0
    let result = '',
        sum = 0,
        x = 0,
        y = 0

    while (num1 || num2) {
        if (num1) {
            x = parseInt(num1.substr(num1.length - 1, 1))
            num1 = num1.substr(0, num1.length - 1)
        } else {
            x = 0
        }

        if (num2) {
            y = parseInt(num2.substr(num2.length - 1, 1))
            num2 = num2.substr(0, num2.length - 1)
        } else {
            y = 0
        }

        sum = carry + x + y
        carry = Math.floor(sum / 10)
        result = (sum % 10) + result
    }
    if (carry === 1) result = 1 + result

    return result
}

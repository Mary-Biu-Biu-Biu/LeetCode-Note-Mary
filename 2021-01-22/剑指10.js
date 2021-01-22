/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    var m1 = 0 // -1
    var m2 = 1 // 0
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = (m1 + m2) % 1000000007
        m1 = m2
        m2 = result
    }
    return result % 1000000007
}

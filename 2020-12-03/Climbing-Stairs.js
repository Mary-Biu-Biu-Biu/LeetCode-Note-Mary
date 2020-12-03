/**
 * @param {number} n
 * @return {number}
 */
// simplified: dynamic programming
var climbStairs = function (n) {
    var method = []
    method[1] = 1
    method[2] = 2
    for (let i = 3; i <= n; i++) {
        method[i] = method[i - 1] + method[i - 2]
    }
    return method[n]
}

// simplified: recursion with [memoization]
var climbStairs = function (n) {
    let memo = []
    function find(sum) {
        if (sum > n) {
            return 0
        }

        if (sum === n) {
            return 1
        }

        if (memo[sum] > 0) {
            return memo[sum]
        }

        memo[sum] = find(sum + 1) + find(sum + 2)
        return memo[sum]
    }

    find(0)
    return memo[0]
}

// bad: recursion
var climbStairs = function (n) {
    let sum = 0
    let method = 0
    function find(sum) {
        if (sum + 1 < n) {
            find(sum + 1, method)
        }

        if (sum + 2 < n) {
            find(sum + 2, method)
        }

        if (sum + 1 === n || sum + 2 === n) {
            method++
        }
    }
    find(sum, method)
    return method
}

// test
var n = 3
n = 2
n = 44
console.log(climbStairs(n))

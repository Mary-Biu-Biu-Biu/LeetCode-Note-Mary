/**
 * @param {number} n
 * @return {number}
 */
// time:O(n),space:O(n)
var nthUglyNumber = function (n) {
    let arr = [1]
    let p2 = 0,
        p3 = 0,
        p5 = 0,
        i = n
    while (i > 0) {
        let n2 = arr[p2] * 2
        let n3 = arr[p3] * 3
        let n5 = arr[p5] * 5
        let num = Math.min(n2, n3, n5)

        // 解决重复
        if (arr.indexOf(num) === -1) {
            arr.push(num)
            i--
        }

        if (n2 === num) {
            p2++
        } else if (n3 === num) {
            p3++
        } else {
            p5++
        }
    }
    return arr[n - 1]
}

console.log(nthUglyNumber(10))

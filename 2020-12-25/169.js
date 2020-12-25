/**
 * @param {number[]} nums
 * @return {number}
 */
// [hash] time:O(n) space:O(n)
var majorityElement = function (nums) {
    let count = new Map()
    let length = nums.length / 2
    for (let n of nums) {
        count.set(n, count.get(n) + 1 || 1) // 如果是hashmap，则每次存取都是O(1)

        if (count.get(n) > length) return n
    }
}

// 摩尔投票
// time:O(n) space:O(1)
var majorityElement2 = function (nums) {
    let count = 0
    let current
    //把 该众数记为 +1 ，把其他数记为 −1 ，将它们全部加起来，和是大于 0 的。
    for (let n of nums) {
        // 一旦count=0，说明该数不是众数，更新目标和count
        if (count === 0) {
            current = n
            count++
        } else n === current ? count++ : count--
    }
    return current
}

var nums = [3, 3, 4]
console.log(majorityElement(nums))
console.log(majorityElement2(nums))

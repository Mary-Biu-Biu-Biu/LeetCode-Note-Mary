/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let curmax = nums[0]
    let totalmax = nums[0]
    if (nums.length === 1) return nums[0]
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i]

        if (current > curmax && current + curmax < current) {
            curmax = current
        } else {
            curmax += current
        }

        if (curmax > totalmax) {
            totalmax = curmax
        }
    }
    return totalmax
}

// test
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// nums = [-2, -1]
// nums = [1, 2]
console.log(maxSubArray(nums))

// simplifed codes
var maxSubArray = function (nums) {
    let pre = 0,
        maxAns = nums[0]
    nums.forEach((x) => {
        pre = Math.max(pre + x, x)
        maxAns = Math.max(maxAns, pre)
    })
    return maxAns
}

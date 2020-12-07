/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// complexity:O(n) space:O(1)
var rotate = function (nums, k) {
    k = k % nums.length
    let first = nums.splice(0, nums.length - k)
    nums.splice(k, 0, ...first)
}

// complexity:O(n) space:O(1)
var rotate2 = function (nums, k) {
    k = k % nums.length
    let count = 0

    for (let start = 0; count < nums.length; start++) {
        let currentMoveIndex = start
        let currentMoveItem = nums[start]

        do {
            let nextMoveIndex = (currentMoveIndex + k) % nums.length
            let temp = nums[nextMoveIndex]
            nums[nextMoveIndex] = currentMoveItem
            currentMoveItem = temp
            currentMoveIndex = nextMoveIndex
            count++
        } while (start !== currentMoveIndex)
    }
}

// complexity:O(n) space:O(1)
var rotate3 = function (nums, k) {
    k = k % nums.length
    for (let i = 0; i < nums.length - k; i++) {
        nums.push(nums.shift())
    }
}

var nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3
nums = [-1, -100, 3, 99]
k = 2
rotate2(nums, k)
console.log(nums)

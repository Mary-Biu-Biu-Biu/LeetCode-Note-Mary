/**
 * @param {number[]} nums
 * @return {number}
 */
// complexity: O(n^2) space:O(n)
var lengthOfLIS = function (nums) {
    if (nums.length < 1) return 0
    let result = [1]
    let max = 1
    for (let i = 1; i < nums.length; i++) {
        result[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                result[i] = Math.max(result[i], result[j] + 1)
            }
        }
        max = Math.max(max, result[i])
    }

    return max
}
// complexity: O(nlogn) space:O(n)
var lengthOfLIS2 = function (nums) {
    if (nums.length < 1) return 0
    let tails = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        if (tails[tails.length - 1] < nums[i]) {
            tails.push(nums[i])
        } else {
            // find fisrt element less than current one with b-search
            let start = 0
            let end = tails.length - 1

            while (start < end) {
                let mid = parseInt((start + end) / 2)

                if (tails[mid] < nums[i]) {
                    start = mid + 1
                } else {
                    end = mid
                }
            }
            tails[start] = nums[i]
        }
    }
    return tails.length
}

var nums = [10, 9, 2, 5, 3, 7, 101, 18]
nums = [7, 7, 7, 7, 7, 7, 7]
nums = [0, 1, 0, 3, 2, 3]
nums = [4, 10, 4, 3, 8, 9]
console.log(lengthOfLIS2(nums))

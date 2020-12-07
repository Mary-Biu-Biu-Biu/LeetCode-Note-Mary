/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// complexity: O(logn) space:O(1)
var search = function (nums, target) {
    let length = nums.length
    let start = 0
    let end = length - 1
    let mid
    while (start <= end) {
        mid = parseInt((end + start) / 2)
        // found
        if (nums[mid] === target) {
            return mid
        }

        // first part has order
        if (nums[start] <= nums[mid]) {
            // target in fisrt part
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1
            }
            // target not in first part
            else {
                start = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[length - 1]) {
                start = mid + 1
            }
            // target not in last part
            else {
                end = mid - 1
            }
        }
    }
    return -1
}

var nums = [4, 5, 6, 7, 0, 1, 2],
    target = 0
;(nums = [4, 5, 6, 7, 0, 1, 2]), (target = 3)
;(nums = [1]), (target = 0)
nums = [5, 1, 3]
console.log(search(nums, target))

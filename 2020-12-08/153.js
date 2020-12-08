/**
 * @param {number[]} nums
 * @return {number}
 */
// complexity:O(logn) space:O(1)
var findMin = function (nums) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        // mid item
        let mid = parseInt((end + start) / 2)

        // ordered
        if (nums[end] >= nums[start]) {
            return nums[start]
        }

        // mid one is the largest
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        }

        // compare with first element
        if (nums[start] < nums[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}

var nums = [3, 4, 5, 1, 2]
nums = [3, 1, 2]
// nums = [2, 3, 4, 5, 1]
console.log(findMin(nums))

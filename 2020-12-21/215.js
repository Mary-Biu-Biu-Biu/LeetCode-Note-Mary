/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    quicksort(nums, 0, nums.length - 1)
    console.log(nums)
    return nums[nums.length - k]
}

function quicksort(arr, left, right) {
    if (left <= right) {
        let pivotIndex = partition(arr, left, right)
        quicksort(arr, left, pivotIndex - 1)
        quicksort(arr, pivotIndex + 1, right)
    }
}

function partition(arr, left, right) {
    let pivot = arr[left]
    let i = left + 1,
        j = right
    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }

        while (arr[j] > pivot) {
            j--
        }
        let temp = arr[j]
        if (i <= j) {
            arr[j] = arr[i]
            arr[i] = temp
            i++
            j--
        } else {
            arr[j] = arr[left]
            arr[left] = temp

            break
        }
    }
    return j
}

var nums = [3, 2, 1, 5, 6, 4],
    k = 2
// nums = [2, 5, 3, 7, 1, 6]
console.log(findKthLargest(nums, k))

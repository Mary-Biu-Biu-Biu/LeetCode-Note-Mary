/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    nums = quicksort(nums, 0, nums.length - 1)
    console.log(nums)
    return nums[k - 1]
}

function quicksort(nums, start = 0, end = nums.length - 1) {
    if (start < end) {
        let newPivot = partition(nums, start, end)
        console.log(
            'partition: new pivot index = ' +
                newPivot +
                ' || new start = ' +
                start +
                ' || new end = ' +
                end +
                '|| nums = ' +
                nums
        )
        quicksort(nums, start, newPivot - 1)
        console.log(
            'first: new pivot index = ' +
                newPivot +
                ' || new start = ' +
                start +
                ' || new end = ' +
                (newPivot - 1) +
                '|| nums = ' +
                nums
        )
        quicksort(nums, newPivot + 1, end)
        console.log(
            'last: new pivot index = ' +
                newPivot +
                ' || new start = ' +
                (newPivot + 1) +
                ' || new end = ' +
                end +
                '|| nums = ' +
                nums
        )
    }

    return nums
}

function partition(nums, start, end) {
    let pivot = nums[start]
    let i = start + 1
    let j = end

    while (i <= j) {
        while (nums[i] < pivot) {
            i++
        }

        while (nums[j] > pivot) {
            j--
        }

        if (i <= j) {
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
        } else {
            break
        }

        j--
        i++
    }

    let temp = nums[j]
    nums[j] = pivot
    nums[start] = temp

    // new pivot index
    return j
}

let nums = [3, 2, 1, 5, 6, 4]
// nums = [2, 5, 3, 7, 1, 6]
// nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
console.log(findKthLargest(nums))

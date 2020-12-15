// 外部调用时，只有一个arr传参，因此需要对左右index进行初始化
function quicksort(arr, left = 0, right = arr.length - 1) {
    // 执行的条件：左右pointer没有重叠
    if (left <= right) {
        // 更新pivot的位置
        let pivotIndex = partition(arr, left, right)

        // pivot的位置已经确定了，把前后的分区仅需执行
        // 可以直接跳过已经确定位置的pivot
        quicksort(arr, left, pivotIndex - 1)
        quicksort(arr, pivotIndex + 1, right)
    }
    return arr
}

function partition(arr, left, right) {
    // 左右指针
    let i = left + 1
    let j = right
    // pivot设定为当前分区的第一个
    let pivot = arr[left]

    // 循环条件：左右index不相遇
    while (i <= j) {
        // 从左边，找到下一个比pivot大的值，更新i
        while (arr[i] < pivot) {
            i++
        }
        // 从右边，找到下一个比pivot小的值，更新j
        while (arr[j] > pivot) {
            j--
        }
        let temp = arr[j]
        // 如果i在j左边，说明指针没有重叠,可以交换位置上的元素

        if (i <= j) {
            arr[j] = arr[i]
            arr[i] = temp

            //并把i和j分别前进一位
            i++
            j--
        }
        // 如果i不在j左边，则说明两边已经错位了
        //（j指向的是左边最后一个比pivot小的元素）
        // 需要把pivot和j指向的元素置换，并结束
        else {
            arr[j] = arr[left]
            arr[left] = temp
            break
        }
    }
    // 返回j，也就是pivot元素置换后的新位置
    return j
}

var array = [2, 5, 3, 7, 1, 6]
console.log(quicksort(array))

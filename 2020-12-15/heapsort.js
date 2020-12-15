function heapsort(arr) {
    // 调整内部结构
    //（从最后一个非子节点开始 -> 到root节点）
    for (let i = parseInt(arr.length / 2 - 1); i >= 0; i--) {
        adjust(arr, i, arr.length)
    }

    // 持续交换堆内的末尾元素和root元素（最大值）
    // 然后对堆进行修复
    for (let lastIndex = arr.length - 1; lastIndex >= 0; lastIndex--) {
        // 交换首尾
        let temp = arr[lastIndex]
        arr[lastIndex] = arr[0]
        arr[0] = temp

        // 修复剩余的堆（原先的root被移除在外）
        // 因此末尾的index就是新的长度
        adjust(arr, 0, lastIndex)
    }
    return arr
}

// 注意：这里的heaplength参数是因为后期首尾交换后
// 修复时heap数量减少，不再等于array的长度
function adjust(arr, parentIndex, heaplength) {
    // 获取当前需要调整的父节点
    let parentValue = arr[parentIndex]

    // 优先获取左边的子节点（因为从左往右排列）
    let childIndex = 2 * parentIndex + 1

    // 用于循环检查被交换的子节点位置上是否需要修复
    // 如果子节点超出了顺序，则说明当前父节点位置上没有子节点了，不需要修复
    while (childIndex < heaplength) {
        // 检查当前parent节点的左右子节点哪个更大（如果有）
        if (
            childIndex + 1 < heaplength &&
            arr[childIndex + 1] > arr[childIndex]
        ) {
            childIndex++
        }

        // 如果左右子节点中的最大值 > 父节点，则需要进行交换
        // 并检查交换后，原先子节点的位置上是否需要修复（进入下次循环）
        if (arr[childIndex] >= parentValue) {
            // 交换位置上的值
            arr[parentIndex] = arr[childIndex]
            arr[childIndex] = parentValue

            // 更新下一次循环中parent index(当前被交换的子节点)
            // 和左边子节点的index(下一次parent的左节点)
            parentIndex = childIndex
            childIndex = parentIndex * 2 + 1
        }

        // 不需要交换，则不需要修复下面的子节点了，直接结束循环
        else {
            break
        }
    }
}

var array = [2, 5, 3, 7, 1, 6]
console.log(heapsort(array))

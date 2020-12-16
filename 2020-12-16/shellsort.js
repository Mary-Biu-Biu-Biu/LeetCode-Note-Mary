function shellsort(arr) {
    // gap:初始为长度一半，之后每次减半，最后一次为1
    for (let gap = parseInt(arr.length / 2); gap > 0; gap = parseInt(gap / 2)) {
        // 从第gap个元素开始，循环每一个元素（跳过每一组的第一个）
        for (let i = gap; i < arr.length; i++) {
            // 从该元素开始，循环和前面的同组元素对比
            let j = i
            // 如果前面元素比自己大，则往前交换一位
            // 如果前面元素比自己小，则说明该元素已经找到合适位置了
            while (j - gap >= 0 && arr[j - gap] > arr[j]) {
                // 交换
                let temp = arr[j]
                arr[j] = arr[j - gap]
                arr[j - gap] = temp

                // 更新当前元素的位置
                j -= gap
            }
        }
    }

    return arr
}

var arr = [3, 5, 1, 4, 6, 8, 2]
console.log(shellsort(arr))

function quicksort(arr) {
    // 当前array的长度已经<=1了，不必继续左右置换
    if (arr.length <= 1) return arr

    // 初始化pivot和左右subarray
    let pivot = arr.splice(0, 1)
    let left = [],
        right = []

    //循环剩下的array直到为空
    while (arr.length > 0) {
        let current = arr.shift()
        // 判断当前元素该放入左边还是右边
        current < pivot ? left.push(current) : right.push(current)
    }

    // 左右分别继续排序，再合并
    return [...quicksort(left), ...pivot, ...quicksort(right)]
}

var array = [2, 5, 3, 7, 1, 6]
console.log(quicksort(array))

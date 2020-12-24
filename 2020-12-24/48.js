/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// time:O(n^2) space:O(1)
var rotate = function (matrix) {
    let start = 0
    let end = matrix.length - 1

    // 收缩条件
    while (start < end) {
        let add = 0
        // 偏移条件，偏移量必须是在左右之间
        while (add < end - start) {
            // 左上角为第0块，右上角为第1块，右下角为第2块，左下角为第3块
            // 每次交换都是4个元素之间进行的，所以直接hardcode写出来就行
            // 3 = 2
            let temp = matrix[end - add][start]
            matrix[end - add][start] = matrix[end][end - add]
            // 2 = 1
            matrix[end][end - add] = matrix[start + add][end]
            // 1 = 0
            matrix[start + add][end] = matrix[start][start + add]
            // 0 = temp
            matrix[start][start + add] = temp

            add++
        }

        // 收缩
        start++
        end--
    }
}

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
rotate(matrix)
console.log(matrix)

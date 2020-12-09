/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// complexity: O(nm) space:O(mn)
var longestCommonSubsequence = function (text1, text2) {
    // similar to edit distance
    let arr = [[text2.length]]
    for (let i = 0; i <= text2.length; i++) {
        arr[0][i] = 0
    }
    for (let i = 1; i <= text1.length; i++) {
        arr.push([])
        arr[i][0] = 0
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                arr[i][j] = arr[i - 1][j - 1] + 1
            } else {
                arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1])
            }
        }
    }
    return arr[text1.length][text2.length]
}

var text1 = 'abcde',
    text2 = 'ace'
console.log(longestCommonSubsequence(text1, text2))

/**
 * @param {string} s
 * @return {number}
 */
// 好像就是滑动窗口：O(n) O(length)
var lengthOfLongestSubstring = function (s) {
    let current = ''
    let max = 0
    // 循环每个字符
    for (let char of s) {
        // 检查字符是否存在于当前子串

        let index = current.indexOf(char)
        // 存在则更新子串的start index，不存在则加入后方
        index === -1
            ? (current = current.concat(char))
            : (current = current.substring(index + 1).concat(char))

        // 计算当前子串是否需要更新最大值
        max = Math.max(max, current.length)
    }
    return max
}

var s = 'pwwkew'
console.log(lengthOfLongestSubstring(s))

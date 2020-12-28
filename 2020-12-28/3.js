/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let current = ''
    let max = 0
    for (let char of s) {
        let index = current.indexOf(char)
        index === -1
            ? (current = current.concat(char))
            : (current = current.substring(index + 1).concat(char))
        max = Math.max(max, current.length)
    }
    return max
}

var s = 'pwwkew'
console.log(lengthOfLongestSubstring(s))

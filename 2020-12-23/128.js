/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己写的，可能类似并查集的概念，但是用的是array而不是map/set
var longestConsecutive = function (nums) {
    let subs = []
    let small = -1,
        large = -1
    let max = 0
    let set = new Set()
    nums.forEach((num) => {
        // 解决重复，初始化small和large
        if (set.has(num)) return
        set.add(num)
        ;(small = -1), (large = -1)

        // 循环子序列，找到可以加入的分组
        subs.forEach((sub, subindex) => {
            if (sub[sub.length - 1] === num - 1) {
                small = subindex
            }
            if (sub[0] === num + 1) {
                large = subindex
            }
        })

        // 合并
        if (small !== -1 && large !== -1) {
            // 放入合并后的区间
            let newsub = [...subs[small], ...[num], ...subs[large]]
            subs.push(newsub)
            // 删除原本的两段，优先删除index大的，避免删另一个的时候index受影响
            let firstdelete = Math.max(small, large)
            subs.splice(firstdelete, 1)
            if (firstdelete === large) {
                subs.splice(small, 1)
            } else {
                subs.splice(large, 1)
            }
            max = Math.max(max, newsub.length)
        } else if (small !== -1) {
            max = Math.max(max, subs[small].push(num))
        } else if (large !== -1) {
            max = Math.max(max, subs[large].unshift(num))
        } else {
            // 前后都没有可以相连的，单独创一个数组
            subs.push([num])
            max = Math.max(max, 1)
        }
    })
    return max
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希+动态规划，理论上更优，因为hashmap查找是O(1)
// 但其实js中内置的map在检索和赋值的时候也是O(n)，和数组区别不大
var longestConsecutive2 = function (nums) {
    let map = new Map()
    let max = 0
    let left = 0,
        right = 0
    for (let num of nums) {
        if (map.has(num)) continue

        // 获取上下段个数，没有则0
        left = map.get(num - 1) || 0
        right = map.get(num + 1) || 0

        // 当前数字连续个数
        let length = left + right + 1

        // 【注意】一定要加入自己的值
        //（其实这里任意值即可，因为后面会更新首尾段的值）
        // 但是防止后面再次遇到该值会以为没遇到过，所以必须把自己加进去
        map.set(num, length)

        // 更新max值
        max = Math.max(max, length)

        // 更新当前连续的首尾端对应的数字
        map.set(num - left, length)
        map.set(num + right, length)
    }

    return max
}

var nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
nums = [4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3]
nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(longestConsecutive(nums))
console.log(longestConsecutive2(nums))

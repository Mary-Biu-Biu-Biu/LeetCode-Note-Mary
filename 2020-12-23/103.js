/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 时间：O(n) 空间：O(h)
// 一开始给个level和result数组的默认值
var zigzagLevelOrder = function (root, level = 0, result = []) {
    // 跳过null节点
    if (root) {
        // 这层还没有数组，则初始化一下
        if (result.length <= level) {
            result.push([root.val])
        } else {
            // 单双层，区分一下新元素的位置
            if (level % 2 === 0) {
                result[level].push(root.val)
            } else {
                result[level].unshift(root.val)
            }
        }
        // 递归
        zigzagLevelOrder(root.left, level + 1, result)
        zigzagLevelOrder(root.right, level + 1, result)
    }
    return result
}

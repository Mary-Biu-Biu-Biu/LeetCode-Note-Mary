/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// method 1: recursion
var inorderTraversal = function (root) {
    var result = []

    var recursion = function (root) {
        if (!root) {
            return
        }
        // left
        recursion(root.left)
        // current(root)
        result.push(root.val)
        // right
        recursion(root.right)
        return
    }

    recursion(root)
    return result
}

// method 2: iteration
var inorderTraversal = function (root) {
    var result = []
    var temp = []

    // only after both root and temp are empty, then complete
    while (root || temp.length) {
        // left
        while (root) {
            temp.push(root)
            root = root.left
        }

        // current
        root = temp.pop()
        result.push(root.val)

        // right
        root = root.right
    }

    return result
}

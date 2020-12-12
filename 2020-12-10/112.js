/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// DFS(recursion) - time:O(n) space:O(height)
var hasPathSum = function (root, sum) {
    if (root === null) return false
    let cursum = 0

    function calc(node, cursum) {
        if (node.left === null) {
            if (node.right === null) {
                return cursum + node.val === sum
            } else {
                return calc(node.right, cursum + node.val)
            }
        }
        if (!calc(node.left, cursum + node.val)) {
            if (node.right === null) {
                return false
            }
            return calc(node.right, cursum + node.val)
        } else {
            return true
        }
    }
    return calc(root, cursum)
}

// simplified DFS recursion - time:O(n) space:O(height)
var hasPathSum = function (root, sum) {
    if (root === null) return false

    if (root.right === null && root.left === null) {
        return root.val === sum
    }

    return (
        hasPathSum(root.left, sum - root.val) ||
        hasPathSum(root.right, sum - root.val)
    )
}

// BFS with queue - time:O(n) space:O(n)
var hasPathSum = function (root, sum) {
    if (root === null) return false

    let queue = [{ node: root, cursum: root.val }]

    while (queue.length > 0) {
        let current = queue.shift()

        if (!current.node.left && !current.node.right && current.cursum === sum)
            return true

        if (current.node.left) {
            queue.push({
                node: current.node.left,
                cursum: current.cursum + current.node.left.val,
            })
        }

        if (current.node.right) {
            queue.push({
                node: current.node.right,
                cursum: current.cursum + current.node.right.val,
            })
        }
    }
    return false
}

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

var n5 = new TreeNode(5),
    n1 = new TreeNode(1),
    n2 = new TreeNode(2),
    n4_1 = new TreeNode(4),
    n4_2 = new TreeNode(4),
    n11 = new TreeNode(11),
    n8 = new TreeNode(8),
    n13 = new TreeNode(13),
    n7 = new TreeNode(7)

n5.left = n4_1
n5.right = n8

n4_1.left = n11

n11.left = n7
n11.right = n2

n8.left = n13
n8.right = n4_2

n4_2.right = n1

console.log(hasPathSum(new TreeNode(), 100))

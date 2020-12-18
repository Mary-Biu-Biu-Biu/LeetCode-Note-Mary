/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let result

    function recur(node) {
        if (node) {
            let leftres = recur(node.left)
            let rightres = recur(node.right)

            // 1.subnodes are q or p, and
            // 2.also considering self is q or p
            if (
                (leftres && rightres) ||
                ((node.val === p.val || node.val === q.val) &&
                    (leftres || rightres))
            ) {
                // return a node not a value 🙄
                result = node
            }

            return (
                leftres || rightres || node.val === p.val || node.val === q.val
            )
        } else {
            return false
        }
    }
    recur(root)

    return result
}

function TreeNode(val, left, right) {
    this.val = val
    this.left = left || null
    this.right = right || null
}

var root = new TreeNode(
    3,
    new TreeNode(
        5,
        new TreeNode(6),
        new TreeNode(2, new TreeNode(7), new TreeNode(4))
    ),
    new TreeNode(1, new TreeNode(0), new TreeNode(8))
)

console.log(
    lowestCommonAncestor(
        root,
        new TreeNode(
            5,
            new TreeNode(6),
            new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(4)
    )
)

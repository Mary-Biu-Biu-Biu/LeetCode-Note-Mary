/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 时间：O(n) 空间：O(n)
var addTwoNumbers = function (l1, l2) {
    // 利用栈完成逆序
    let stack1 = [],
        stack2 = []
    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }

    // 从尾部开始计算
    let carry = 0
    let start = null
    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
        // 考虑进位+空值
        let sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry
        carry = parseInt(sum / 10)
        let current = new ListNode(sum % 10)

        // 更新链表头部
        current.next = start
        start = current
    }
    return start
}

function ListNode(val, next) {
    this.val = val
    this.next = next || null
}

let l1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3))))
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(l1, l2))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 2-4：42
// 5-6-4：465
// 7-0-8：507
var addTwoNumbers = function (l1, l2) {
    let carry = 0,
        sum = 0
    let dumHead = new ListNode()
    let current = dumHead

    while (l1 || l2) {
        // sum = (l1.val || 0) + (l2.val || 0) + carry
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)

        current = current.next
        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
    }

    if (carry === 1) {
        current.next = new ListNode(1)
    }

    return dumHead.next
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
l1 = new ListNode(9, new ListNode(9, new ListNode(9)))
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
l2 = new ListNode(9, new ListNode(9))
console.log(addTwoNumbers(l1, l2))

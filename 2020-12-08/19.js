/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// complexity:O(length) space:O(length)
var removeNthFromEnd = function (head, n) {
    let stack = []
    let result = new ListNode(0, head)
    stack.push(result)
    while (head != null) {
        stack.push(head)
        head = head.next
    }
    let element
    while (n > 0) {
        element = stack.pop()
        n--
    }
    stack.pop().next = element.next
    return result.next
}

// 2 pointers[optimise] - complexity:O(n) space:O(1)
var removeNthFromEnd2 = function (head, n) {
    let start = new ListNode(0, head)
    let slow = start,
        fast = head
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    while (fast != null) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return start.next
}

// test
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

var head = new ListNode(
    1,
    new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(4))))
)
// head = new ListNode(1)

console.log(removeNthFromEnd2(head, 2))

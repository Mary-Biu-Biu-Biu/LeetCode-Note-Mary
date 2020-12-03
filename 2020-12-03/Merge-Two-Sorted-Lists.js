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
// iteration
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode()
    let tail = head
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            tail.next = new ListNode(l2.val)
            l2 = l2.next
        }
        tail = tail.next
    }
    tail.next = l1 === null ? l2 : l1
    return head.next
}

// recursion
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

var l1 = new ListNode(1)
l1.next = new ListNode(2, new ListNode(4))

var l2 = new ListNode(1)
l2.next = new ListNode(3, new ListNode(4))

console.log(mergeTwoLists(l1, l2))

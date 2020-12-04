/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// use set
var hasCycle = function (head) {
    let set = new Set()
    while (head !== null) {
        if (set.has(head)) {
            return true
        }
        set.add(head)
        head = head.next
    }
    return false
}

// fast and slow pointer
var hasCycle = function (head) {
    let fast = head,
        slow = head
    while (fast !== null && fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
}

// test
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

var head = new ListNode(3)
var two = new ListNode(2, new ListNode(0))
head.next = two
var tail = new ListNode(4, two)
console.log(hasCycle(head))

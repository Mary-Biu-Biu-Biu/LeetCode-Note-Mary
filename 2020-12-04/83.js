/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let start = new ListNode(-1)
    start.next = head
    let tail = start
    let set = new Set()
    while (head !== null) {
        // console.log(set)
        // console.log(head.val)

        if (!set.has(head.val)) {
            set.add(head.val)
            tail.next = head
            tail = tail.next
        }
        head = head.next
    }

    // avoid skipping multiple elements till the end
    tail.next = null
    return start.next
}

// test
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

var head = new ListNode(
    1,
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
)

// head = new ListNode(1, new ListNode(1, new ListNode(1)))
console.log(deleteDuplicates(head))

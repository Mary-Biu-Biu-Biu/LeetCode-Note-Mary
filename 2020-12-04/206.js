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
var reverseList = function (head) {
    let arr = []
    if (head === null) return head
    while (head !== null) {
        arr.push(head)
        head = head.next
    }
    for (let i = arr.length; i > 1; i--) {
        arr[i - 1].next = arr[i - 2]
    }
    arr[0].next = null
    return arr[arr.length - 1]
}

// simplified iteration
var reverseList2 = function (head) {
    let prev = null,
        current = null
    while (head !== null) {
        current = head
        head = head.next
        current.next = prev
        prev = current
    }

    return prev
}

// recurison
var reverseList3 = function (head) {
    let tail = null
    var recursion = (input) => {
        // find head node in reverse direction
        if (input === null || input.next === null) {
            return input
        }

        let head = recursion(input.next)
        input.next.next = input
        input.next = null
        // always return head node
        return head
    }

    return recursion(head)
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

console.log(reverseList2(head))

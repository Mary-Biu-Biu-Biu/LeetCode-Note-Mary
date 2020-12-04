/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let head = new ListNode()
    let tail = head

    while (true) {
        let minIndex = -1
        let allnull = true
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] === null) {
                continue
            }
            allnull = false
            if (minIndex === -1) {
                minIndex = i
            }
            if (lists[i].val < lists[minIndex].val) {
                minIndex = i
            }
        }
        if (allnull) {
            break
        }
        tail.next = lists[minIndex]
        lists[minIndex] = lists[minIndex].next
        tail = tail.next
    }
    return head.next
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

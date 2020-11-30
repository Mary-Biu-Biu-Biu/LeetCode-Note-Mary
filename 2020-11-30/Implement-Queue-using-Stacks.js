/**
 * Initialize your data structure here.
 */
// use 2 separate stacks to store elements
var MyQueue = function () {
    this.pushstack = []
    this.popstack = []
    this.length = 0
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.pushstack.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // only pour elements from push stack when pop stack is empty
    if (this.popstack.length === 0) {
        while (this.pushstack.length !== 0) {
            this.popstack.push(this.pushstack.pop())
        }
    }
    return this.popstack.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.popstack.length === 0) {
        while (this.pushstack.length !== 0) {
            this.popstack.push(this.pushstack.pop())
        }
    }
    return this.popstack[this.popstack.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.popstack.length === 0 && this.pushstack.length === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// test
var myQueue = new MyQueue()
myQueue.push(1) // queue is: [1]
myQueue.push(2) // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek() // return 1
myQueue.pop() // return 1, queue is [2]
myQueue.empty() // return false

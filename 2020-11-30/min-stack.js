/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.min = null
    this.stack = [] // to store values
    this.minstack = [] // to store current min-value accordingly
    this.length = 0
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    // compare with last min-value to store current min-value
    if (this.length === 0 || this.minstack[this.length - 1] > x) {
        this.minstack.push(x)
    } else {
        this.minstack.push(this.minstack[this.length - 1])
    }
    this.length++
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.minstack.pop()
    this.length--
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minstack[this.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// test
var minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin())
// return -3
minStack.pop()
console.log(minStack.top())
// return 0
console.log(minStack.getMin())
// return -2

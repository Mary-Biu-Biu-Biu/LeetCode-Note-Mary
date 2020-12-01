/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = []

    while (pushed.length !== 0) {
        stack.push(pushed.shift())

        while (stack.length !== 0 && stack[stack.length - 1] === popped[0]) {
            stack.pop()
            popped.shift()
        }
    }
    return stack.length === 0
}

// test
var pushed = [1, 2, 3, 4, 5]
var popped = [4, 3, 5, 1, 2]

// pushed = [1, 2, 3, 4, 5]
// popped = [4, 5, 3, 2, 1]

console.log(validateStackSequences(pushed, popped))

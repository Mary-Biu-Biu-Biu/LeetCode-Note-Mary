/**
 * @param {string} s
 * @return {boolean}
 */

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */

// actual calling function
var isValid = function (s) {
    // create new array to mockup a stack
    let stack = []

    // loop for each character in string
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        // if current character is left parathenese, add right one in stack
        switch (c) {
            case '(':
                stack.push(')')
                break
            case '[':
                stack.push(']')
                break
            case '{':
                stack.push('}')
                break
            // if right one, then delete latest one and check
            default:
                if (c !== stack.pop()) {
                    return false
                }
        }
    }
    return stack.length === 0
}

// test
var s = '()'
s = '()[]{}'
s = '(]'
s = '([)]'
s = '{[]}'
s = '{[]})}'
console.log(isValid(s))

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    let a
    let b
    while (tokens.length > 0) {
        let c = tokens.shift()

        switch (c) {
            case '*':
                a = stack.pop()
                b = stack.pop()
                stack.push(a * b)
                break
            case '/':
                a = stack.pop()
                b = stack.pop()
                stack.push(parseInt(b / a))
                break
            case '+':
                a = stack.pop()
                b = stack.pop()
                stack.push(a + b)
                break
            case '-':
                a = stack.pop()
                b = stack.pop()
                stack.push(b - a)
                break
            default:
                stack.push(parseInt(c))
                break
        }
        // console.log('c:' + c + ' || result:' + result + ' || stack:' + stack)
    }
    return stack.pop()
}

// test
var s = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
// s = ['4', '13', '5', '/', '+']
// s = ['2', '1', '+', '3', '*']
// s = ['0', '3', '/']
// s = ['4', '3', '-']
// s = ['3', '11', '+', '5', '-']
console.log(evalRPN(s))

// simplest code
var evalRPN = function (tokens) {
    return (
        (h = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => (a / b) | 0,
        }),
        tokens.reduce(
            (s, v) => (s.push(h[v] ? h[v](...s.splice(-2, 2)) : Number(v)), s),
            []
        )[0]
    )
}

// using map to reduce codes
var evalRPN = function (tokens) {
    const stack = []
    const operationMap = new Map([
        ['+', (b, a) => +a + +b],
        ['-', (b, a) => +a - +b],
        ['*', (b, a) => +a * +b],
        ['/', (b, a) => ~~(+a / +b)],
    ])
    tokens.forEach((token) => {
        if (operationMap.has(token)) {
            stack.push(operationMap.get(token)(stack.pop(), stack.pop()))
        } else {
            stack.push(token)
        }
    })
    return stack.pop()
}

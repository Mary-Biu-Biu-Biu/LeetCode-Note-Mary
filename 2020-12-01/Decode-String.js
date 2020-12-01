/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let res = ''
    let restack = []
    let num = 0
    let numstack = []

    for (i in s) {
        let c = s[i]

        if (c === '[') {
            restack.push(res)
            numstack.push(num)
            res = ''
            num = 0
        } else if (c === ']') {
            let temp = res
            res = restack.pop()
            num = numstack.pop()
            for (let j = 0; j < num; j++) {
                res += temp
            }
            num = 0
        } else if ('1234567890'.includes(c)) {
            num = num * 10 + parseInt(c)
        } else {
            res += c
        }
        // console.log(
        //     'res:' +
        //         res +
        //         ' || num:' +
        //         num +
        //         ' || res-stack:' +
        //         restack +
        //         ' || numstack:' +
        //         numstack
        // )
    }
    return res
}

// test
var s = 'ab3[a2[c]]'
console.log(decodeString(s))

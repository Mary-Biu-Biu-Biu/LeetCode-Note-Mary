/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let result = []
    let index = 0
    let skip = 2
    for (let num of A) {
        while (skip > 0) {
            // even: index 0
            if (num % 2 === 0) {
                result[0] = num
            } else {
            }
            skip--
        }

        let count = 0
        // even number
        if (num % 2 === 0) {
            // find first continous odd number of it
            for (let e of result) {
                e % 2 === 0 ? (count += -1) : (count += 1)
                if (count >= 1) {
                    break
                }
                index++
            }
        }
        // odd number
        else {
            for (let e of result) {
                e % 2 === 0 ? (count += -1) : (count += 1)
                if (count < -1) {
                    break
                }
                index = index + 1
            }
        }
        result.splice(index, 0, num)

        console.log(count)
        console.log(result)
        index = 0
    }
    return result
}

var A = [4, 2, 5, 7]
A = [3, 1, 4, 2]
console.log(sortArrayByParityII(A))

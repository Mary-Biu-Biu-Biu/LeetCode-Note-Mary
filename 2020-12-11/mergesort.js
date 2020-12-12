function mergesort(arr) {
    // if length > 1 then split into 2 partitions
    if (arr.length > 1) {
        // get center point and break
        let middle = parseInt(arr.length / 2)
        let first = arr.slice(0, middle)
        let last = arr.slice(middle)

        // recursively break into paritions with single elements
        let sortedfisrt = mergesort(first)
        let sortedlast = mergesort(last)

        // and recursively sort 2 partitions
        return merge(sortedfisrt, sortedlast)
    }
    // if length = 1 or 0, then no need to sort this partition
    else {
        return arr
    }
}

function merge(first, last) {
    // to store sorted array
    let result = []

    // loop until one of the array is empty
    while (first.length && last.length) {
        first[0] < last[0]
            ? result.push(first.shift())
            : result.push(last.shift())
    }

    // then add the rest of the remained array into sorted array
    // cuz all the elements in remained array must be greater
    // than current elements in result
    return result.concat(first).concat(last)
}

var arr = [3, 5, 1, 4, 6, 8, 2]
console.log(mergesort(arr))

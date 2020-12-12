function insertionsort(arr) {
    // no need to sort left hand-side when it only has 1 element
    // so start from 1
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i]
        // loop left hand side elements
        // and move elements larger than current element
        // to provide position for current element
        let j = i - 1
        while (j >= 0 && arr[j] > element) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = element
    }

    return arr
}

var arr = [3, 5, 1, 4, 6, 8, 2]
console.log(insertionsort(arr))

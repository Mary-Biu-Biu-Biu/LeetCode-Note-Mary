/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
// complexity:O(1),but worst O(∞) space:O(1)
var rand10 = function () {
    while (true) {
        let num = (rand7() - 1) * 7 + rand7()

        if (num <= 40) {
            return (num % 10) + 1
        }
    }
}

// optimise
function rand10() {
    while (true) {
        let num = (rand7() - 1) * 7 + rand7()

        if (num <= 40) {
            return ((num - 1) % 10) + 1
        }

        num = (num - 40 - 1) * 7 + rand7()

        if (num <= 60) {
            return (num % 10) + 1
        }

        if (num <= 20) {
            return 1 + (num % 10)
        }
    }
}

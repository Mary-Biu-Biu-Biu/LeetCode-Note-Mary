// 双指针：从后往前
// （相比从前往后的优点：节省内存，不用处理多余的0）
const merge = (nums1, m, nums2, n) => {
    // 当前指针从nums1的最后一位开始
    let i = nums1.length - 1

    // 分别是nums1和nums2的指针
    m--
    n--

    // 循环条件：nums2还没指到第一位
    while (n >= 0) {
        // 当前位置元素 = nums1和nums2指针位置上更大的那个
        // 如果nums1 = [0]且 m = 0（初始），
        // =》 则nums1[-1]会返回undefined。
        // =》 undefined无法和数字进行比较，因此会直接走向false。则nums1[i--] = nums2[n--]
        if (nums1[m] > nums2[n]) {
            nums1[i--] = nums1[m--]
        } else {
            nums1[i--] = nums2[n--]
        }
    }
}

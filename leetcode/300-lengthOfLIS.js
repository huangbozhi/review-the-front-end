// 最长递增子序列
/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  if (!nums.length) return 0;
  let res = new Array(nums.length).fill(1)
  let max = 0
  for (let m = 0; m < nums.length; m++) {
    for (let n = 0; n < m; n++) {
      if (nums[n] < nums[m]) {
        res[m] = Math.max(res[m], res[n] + 1)
      }
    }
    max = Math.max(max, res[m])
  }
  console.log(res)
  return max
}
console.log(lengthOfLIS([21, 5, 3, 8, 5, 9, 3, 4, 6, 1, 9]))


/**
 * 定义一个长度为原数组的数组，值为 1
 * 对数组进行冒泡遍历
 * 通过最外层的次数，记录每一趟冒泡结束的位置时所递增的个数
 * 每一次冒泡完成时，维护最大的递增数
 * 最后所得的结果即为最长的递增数
 *
 */
/* 给你两个整数数组 source 和 target ，长度都是 n 。还有一个数组 allowedSwaps ，其中每个 allowedSwaps[i] = [ai, bi] 表示你可以交换数组 source 中下标为 ai 和 bi（下标从 0 开始）的两个元素。注意，你可以按 任意 顺序 多次 交换一对特定下标指向的元素。

相同长度的两个数组 source 和 target 间的 汉明距离 是元素不同的下标数量。形式上，其值等于满足 source[i] != target[i] （下标从 0 开始）的下标 i（0 <= i <= n-1）的数量。

在对数组 source 执行 任意 数量的交换操作后，返回 source 和 target 间的 最小汉明距离 。
 */

// 解法错误
/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function(source, target, allowedSwaps) {
  allowedSwaps.map(v => {
    if (v.length) {
      let startIndex = v[0]
      let endIndex = v[1]
      // 交换值
      let temp = source[startIndex]
      source[startIndex] = source[endIndex]
      source[endIndex] = temp
    }
  })
  console.log(source)
  console.log(target)
  let count = 0
  source.map((v, i) => {
    if (v !== target[i]) {
      count ++
    }
  })
  return count
};

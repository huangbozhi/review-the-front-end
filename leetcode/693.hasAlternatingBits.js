// 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let flag = n & 1
  while (n > 0) {
    n = n >> 1
    if ((n & 1) + flag !== 1) {
      return false
    }
    flag = flag ? 0 : 1
  }
  return true
};
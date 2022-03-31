/* 自除数 是指可以被它包含的每一位数整除的数。

例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
自除数 不允许包含 0 。

给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const arr = []
  for (let i = left; i <= right; i++) {
    if (isSelfNumber(i)) {
      arr.push(i)
    }
  }
  return arr
};

const isSelfNumber = (num) => {
  num = String(num)
  for (let i = 0; i < num.length; i++) {
    if (num % num[i] !== 0) {
      return false
    }
  }
  return true
}
var NumArray = function (nums) {
  this.sums = [];
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    this.sums[i] = sum + nums[i]
    sum = this.sums[i]
  }
  this.sums.unshift(0)
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j + 1] - this.sums[i]
};

// 思路
// 最开始的错误思路
/// 利用一个新的数组，将累加的过程逐个放进对应的位置
/// 然后利用前j个数的和 减去 前 i-1 个数的和
/// 差值即为 i->j 的总和
/// 但是没有考虑到 i 为 0 情况，程序会报错 

// 后面修正后的思路
/// 只需要在新的数组前unshift 一个0，这样相当于整体累加的过程往后移了一位
/// 最后 i -> j+1 即为之前 i-1 -> j 的思路，只是给他一个容错(即i==0)的情况
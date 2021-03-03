// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i 
// 计算其二进制数中的 1 的数目并将它们作为数组返回。

// 输入: 5
// 输出: [0,1,1,2,1,2]

/**
 * @param {number} num
 * @return {number[]}
 */

// 1
// 直接计算
// function countBits(num) {
//   let res = new Array(num + 1).fill(0)
//   for (let i = 1; i <= num; i++) {
//     res[i] = countIndex(i)
//   }
//   console.log(res)
//   return res
// }
// function countIndex(i) {
//   let len = 0;
//   while (i > 0) {
//     i &= i - 1
//     len++
//   }
//   return len
// }

// 2 动态规划——最低有效位
// var countBits = function (num) {
//   let res = new Array(num + 1).fill(0)
//   for (let i = 1; i <= num; i++) {
//     res[i] = res[i >> 1] + (i & 1)
//   }
//   console.log(res)
// };

// 3 动态规划——最高有效位
function countBits(num) {
  let res = new Array(num + 1).fill(0)
  let temp = 0
  for (let i = 1; i <= num; i++) {
    if (!(i & i - 1)) {
      temp = i
    }
    res[i] = res[i - temp] + 1
  }
  console.log(res)
  return res
}


countBits(10)


// 思路:
/**
 *这题有好几种比较好点解法，当时只想到直接计算的方法，还卡住了，
  这里顺便记录一下动态规划的解法

  1.直接计算
    先定义n+1的数组，然后遍历数组，
    取当前项和前一项做 与(&) 运算，直到结果为0，所做的次数即为该项 1 的个数
    (ps:) 2的n次方与2的n次方 -1 比较的结果为 0

  2. 动态规划——最低有效位
    对于正整数 x，将其二进制表示右移一位，等价于将其二进制表示的最低位去掉，得到的数是 x/2 => x >> 1
    如果 x/2 的值已知，则可以得到 x 的值：

    如果 x 是偶数，则 res[i] = res[i>>1]
    如果 x 是奇数，则 res[i] = res[i>>1] + 1

  3. 动态规划——最高有效位
    「最高有效位」  ->  二进制的表示中只有最高位是 1
     i 比 i-「最高有效位」 的「一比特数」多 1
 */


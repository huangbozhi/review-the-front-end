// 俄罗斯套娃信封问题
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length < 2) return envelopes.length
  // 对数组进行升序
  envelopes.sort((a, b) => {
    if (a[0] != b[0]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }

  })

  let max = 0
  let res = new Array(envelopes.length).fill(1)

  for (let m = 0; m < envelopes.length; m++) {
    for (let n = 0; n < m; n++) {
      if (envelopes[n][0] != envelopes[m][0]) {
        if (envelopes[m][1] > envelopes[n][1]) {
          res[m] = Math.max(res[m], res[n] + 1)
        }
      }
    }
    max = Math.max(max, res[m])
  }

  return max
};


// 思路
/**
 * ps: 做不出来，首先去看来300-leetcode的最长递增子序列的思路
 * 然后先对数组进行升序排列(相当于x,y轴) -》 将它变成一个x轴，y轴递增
 * 然后遍历数字，x轴不用维护，它一定时递增的
 * 我们只需要看y轴最长的子序列长度为多少，这样就将它转换为 最长子序列递增的思路
 * 我们首先定义一个变量 即最长的数
 * 通过冒泡算法
 * 然后当x轴递增的时候(因为x轴可能时相等的)，判断y轴的最长递增数
 * 最后输出就行了
 */
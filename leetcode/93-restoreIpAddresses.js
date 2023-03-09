/* 
  有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
  例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
  给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。
  你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。 
*/

/* 
  输入：s = "25525511135"
  输出：["255.255.11.135","255.255.111.35"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) return
  const NUM_LENGTH = 4
  const temp = new Array(NUM_LENGTH)
  const res = []

  const dfs = (s, start, poi) => {
    // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
    if (poi === NUM_LENGTH) {
      if (start === s.length) {
        res.push(temp.join('.'))
      }
      return
    }

    // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
    if (start === s.length) {
      return
    }

    // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
    if (s[start] === '0') { // 当第一项为'0'时
      // temp.push(s[start])
      temp[poi] = 0
      dfs(s, start + 1, poi + 1)
    }

    // 一般情况，枚举每一种可能性并递归
    let str = 0
    for (let i = start; i < s.length; i++) {
      str = str * 10 + (s[i] - 0)
      if (str > 0 && str < 256) {
        temp[poi] = str
        dfs(s, i + 1, poi + 1)
      } else {
        break
      }
    }

  }

  dfs(s, 0, 0) // 第0个位置开始回溯

  return res
}

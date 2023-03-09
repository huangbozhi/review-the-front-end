/* 给你一个整数 turnedOn ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以 按任意顺序 返回答案。

小时不会以零开头：

例如，"01:00" 是无效的时间，正确的写法应该是 "1:00" 。
分钟必须由两位数组成，可能会以零开头：

例如，"10:2" 是无效的时间，正确的写法应该是 "10:02" 。 */

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  if (turnedOn === 0) return ['0:00']
  if (turnedOn > 8) return []
  let res = []
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if(i.toString(2).split('0').join('').length + j.toString(2).split('0').join('').length === turnedOn) {
        res.push(`${i}:${j>9?j:`0${j}`}`)
      }
    }
  }
  return res
}
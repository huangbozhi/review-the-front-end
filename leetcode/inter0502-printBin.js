/* 二进制数转字符串。给定一个介于0和1之间的实数（如0.72），类型为double，
打印它的二进制表达式。如果该数字无法精确地用32位以内的二进制表示，
则打印“ERROR”。 */

/**
 * @param {number} num
 * @return {string}
 */
var printBin = function(num) {
  let newNum = String(num)
  let lastNum = newNum[newNum.length - 1]
  if (lastNum !== '5') return 'ERROR'
  let str = '0.'
  let time = 0
  while (num !== 0) {
    num = num * 2
    if (num >= 1) {
      str += '1'
      num -= 1
    } else {
      str += '0'
    }
    time ++
    console.log(num, '----')
    if (time > 32) {
      return 'ERROR'
    }
  }
  console.log('str: ', str)
  return str
}
printBin(0.625)


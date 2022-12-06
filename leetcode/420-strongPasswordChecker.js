/* 如果一个密码满足下述所有条件，则认为这个密码是强密码：
由至少 6 个，至多 20 个字符组成。
至少包含 一个小写 字母，一个大写 字母，和 一个数字 。
同一字符 不能 连续出现三次 (比如 "...aaa..." 是不允许的, 但是 "...aa...a..." 如果满足其他条件也可以算是强密码)。
给你一个字符串 password ，返回 将 password 修改到满足强密码条件需要的最少修改步数。如果 password 已经是强密码，则返回 0 。

在一步修改操作中，你可以：

插入一个字符到 password ，
从 password 中删除一个字符，或
用另一个字符来替换 password 中的某个字符。
 */

/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(password) {
  const obj = isConnecStr(password)
  let res = obj.times
  let num = 0
  const isCaps = isJudgeConditions(password, 1)
  const isLows = isJudgeConditions(password, 2)
  const isNums = isJudgeConditions(password, 3)
  !isCaps && (num += 1)
  !isLows && (num += 1)
  !isNums && (num += 1)
  if (res < num) {
    res = num
  }
  let len = password.length
  if (len + res < 6) {
    res = 6 - len
  }
  if (len > 20) {
    let diff = len - 20
    obj.times >= diff ? res -= diff : res += (diff - obj.times)
  }
  return res
}
// 是否有大写 1
// 是否有小写 2
// 是否有数字 3
const isJudgeConditions = (str, type) => {
  let reg = ''
  switch (type) {
    case 1: reg = /^.*[A-Z]+.*$/; break
    case 2: reg = /^.*[a-z]+.*$/; break
    case 3: reg = /^.*[0-9]+.*$/; break
  }
  if (str.match(reg)) {
    return true
  }
  return false
}
// 是否存在连续的值 返回隔离所需要的次数
const isConnecStr = (str) => {
  const arr = []
  const obj = {
    num: 1,
    times: 0,
    type: [] // 1 大写 2 小写 3数字
  }
  let num = 1
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i+1]) {
      num ++
    } else {
      if (num >= 3) {
        arr.push(num)
        isJudgeConditions(str[i], 1) && obj.type.push('A')
        isJudgeConditions(str[i], 2) && obj.type.push('a')
        isJudgeConditions(str[i], 3) && obj.type.push(0)
      }
      num = 1
    }
    if (i === str.length -2 && num >= 3) {
      arr.push(num)
      isJudgeConditions(str[i], 1) && obj.type.push('A')
      isJudgeConditions(str[i], 2) && obj.type.push('a')
      isJudgeConditions(str[i], 3) && obj.type.push(0)
    }
  }
  obj.times = arr.map(v => Math.floor(v / 3)).reduce((a, b) => a + b, 0)
  // obj.type = [... new Set(obj.type)]
  delete obj.num
  return obj
}

console.log(isConnecStr('aaaabbbbbbaaaa'))
console.log(isConnecStr('aaa123'))
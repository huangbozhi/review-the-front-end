/* 给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 
“对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canReorderDoubled = function(arr) {
  const list = arr.sort((a, b) => {
    return a - b
  })
  console.log(list)
//   const list = list.map(v => v)
  for (let i = 0; i < list.length; i++) {
    let item = list[i]
    if (typeof item !== 'number') {
      continue
    }
    let item1 = list[i] / 2
    if (item >= 0) {
      item1 = item * 2
    }
    const idx = list.indexOf(item1)
    if (idx !== -1) {
      list.splice(idx, 1, '*')
      list.splice(i, 1, '*')
    } else {
      return false
    }
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== '*') return false
  }
  return true
}
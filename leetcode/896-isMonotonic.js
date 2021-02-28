function isMonotonic(a) {
  if (a.length == 1) return a
  let len = a.length
  let i = 0;
  let j = len - i - 1;
  let then = 0
  let less = 0
  let time = len >> 1
  while (i < j) {
    if (a[i] <= a[i + 1] && a[j] >= a[j - 1]) {
      then++
    }
    if (a[i] >= a[i + 1] && a[j] <= a[j - 1]) {
      less++
    }
    i++; j--
  }
  if (then == time || less == time) {
    return true
  } else {
    return false
  }
}

console.log(isMonotonic([1, 2, 2, 3]))
console.log(isMonotonic([1, 2, 2, 3, 2]))
console.log(isMonotonic([6, 5, 4, 4]))

// 思路
// 使用双指针遍历数组，
// 使用左移运算判断需要比较的次数
// 然后遍历数组并比对次数
// 可以判断是否是单调数组
// 删除字符串中的所有相邻重复项

function removeDuplicates(str) {
  if (str.length == 1) return str
  let i = 0;
  let len = str.length
  while (i <= len - 2) {
    if (str[i] == str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2)
      i = 0;
      len = str.length
    } else {
      i++
    }
  }
  console.log(str)
  return str
}

// removeDuplicates("aaaaaaaa")

// 思路
/**
 * 使用双指针，对相邻的两个元素进行对比，若相等，则删除，
 * 然后指针复位，重新走一遍，这样就能判断最后剩下了什么
 */

// 优化后的
/**
 * 利用栈 存储数据
 * 如果栈顶和字符串首位的一样，
 * 则出栈，并且删除字符串首位，继续向后遍历
 * 这种方法只需要一次遍历就行
 */

function ans(str) {
  let stack = []
  let len = str.length
  for (let i = 0; i < len; i++) {
    if (stack.length && stack[stack.length - 1] == str[i]) {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }
  return stack.join('')
}

console.log(ans('abbacd'))
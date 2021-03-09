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

removeDuplicates("aaaaaaaa")

// 思路
/**
 * 使用双指针，对相邻的两个元素进行对比，若相等，则删除，
 * 然后指针复位，重新走一遍，这样就能判断最后剩下了什么
 */
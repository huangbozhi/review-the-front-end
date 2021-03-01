// m行*n列 -> n*m
function transpose(a) {
  let m = a.length
  let n = a[0].length

  let res = new Array(n).fill(0).map(() => new Array())

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[i][j] = a[j][i]
    }
  }
  return res
}

transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
transpose([[1, 2, 3], [4, 5, 6]])

// 思路
// 转置矩阵 m行*n列 -> m列*n行
// 可以取第一个数组的长度 即为转置后的列(n)，整体数组长度为行(m)
// 定义一个 转置后的 空数组(n*m)
// 对原数组进行遍历
// 转置后的行数为转置前的列数
// 先遍历 n 列， 这样才会生成 n 行长度的数组
// 然后在嵌套循环 m 行，然后 ([i][j] = [j][i]) 赋值,得出结果n*m
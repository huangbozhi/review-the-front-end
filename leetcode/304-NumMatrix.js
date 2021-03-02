/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  if (matrix.length == 1 && !matrix[0]) return
  let m = matrix.length
  let n = matrix[0] && matrix[0].length || 0
  this.nums = new Array(m).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.nums[i][j + 1] = this.nums[i][j] + matrix[i][j]
    }
  }
  console.log(this.nums)
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let i = row1; i < row2 + 1; i++) {
    sum += this.nums[i][col2 + 1] - this.nums[i][col1]
  }
  return sum
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

let matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]
let test = [[-1]]
let newArr = new NumMatrix(test)
// let arr = new NumMatrix(matrix)
// arr.sumRegion(2, 1, 4, 3)

// 思路
/**
 * 看到二维区域求和，首先想到的事把每个一维数组变成一个求和过程的数组，但是为了i=0的情况，需要在首位放一个0填充
 * 然后先双层遍历该二维数组，使得新的二维数组变成一个求和累加的新数组
 * 然后每个一维数组类似303-leetcode的解法，用 j+1 -> i 的差值求这一行的总和
 * 然后遍历行数，每一行的总和数相加
 * 即为该题的解
 *
 * ps: 有个临界情况卡了我10多分钟（有点憨）
 * matrix: [[]]
 * 这种情况只需要判断该二维数组列不为空就行(我判断的时候傻了，记录一下)。
 */
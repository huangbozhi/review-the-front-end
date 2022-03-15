/* 
给你一个整数数组 nums ，请你找出 nums 子集 按位或 可能得到的 最大值 ，并返回按位或能得到最大值的 不同非空子集的数目 。

如果数组 a 可以由数组 b 删除一些元素（或不删除）得到，则认为数组 a 是数组 b 的一个 子集 。如果选中的元素下标位置不一样，则认为两个子集 不同 。

对数组 a 执行 按位或 ，结果等于 a[0] OR a[1] OR ... OR a[a.length - 1]（下标从 0 开始）。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  const len = nums.length
  let sum = 0
  let count = 0
  nums.map(v => {
    sum = sum | v
  })
  for (let i = 0; i < Math.pow(2, len); i++) {
    let index = 0
    let arrI = i
    let arr = []
    while (arrI !== 0) {
      if (arrI & 1 === 1) {
        arr.push(nums[index])
      }
      arrI = arrI >> 1
      index += 1
    }
    let temp = 0
    if (arr.length) {
      arr.map(v => {
        temp = temp | v
      })
      if (temp === sum) {
        count ++
      }
    }
  }
  console.log(count)
  return count
}

countMaxOrSubsets([1,3])
countMaxOrSubsets([2,2,2])
countMaxOrSubsets([3,2,1,5])
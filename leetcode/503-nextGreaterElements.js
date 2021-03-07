// 下一个更大元素 II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// function nextGreaterElements(nums) {
//   let len = nums.length
//   let res = new Array(len).fill(null)
//   for (let i = 0; i < len; i++) {
//     if (i == len - 1) {
//       for (let j = 0; j < i; j++) {
//         if (nums[j] > nums[i]) {
//           res[i] = nums[j]
//           break;
//         }
//       }
//     } else {
//       for (let j = i + 1; j < len; j++) {
//         if (nums[j] > nums[i]) {
//           res[i] = nums[j]
//           break;
//         }
//       }
//       if (res[i] == null) {
//         for (let j = 0; j < i; j++) {
//           if (nums[j] > nums[i]) {
//             res[i] = nums[j]
//             break;
//           }
//         }
//       }
//     }
//   }
//   return res
// }

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const ret = new Array(n).fill(-1);
  const stk = [];
  for (let i = 0; i < n * 2 - 1; i++) {
    while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
      ret[stk[stk.length - 1]] = nums[i % n];
      stk.pop();
    }
    stk.push(i % n);
  }
  return ret;
};

nextGreaterElements([1, 5, 3, 6, 8])
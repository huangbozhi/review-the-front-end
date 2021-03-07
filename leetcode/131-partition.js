/**
 * @param {string} s
 * @return {string[][]}
 */
// var partition = function (s) {
//     if (s.length == 1) return [[s]]
//     let res = []
//     res[0] = s.split('')
//     let length = s.length
//     let tempArr = []
//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j <= length; j++) {
//             let temp = s.substr(i, j + 1)
//             if (temp == temp.split('').reverse().join('')) {
//                 tempArr.push(temp)
//             }
//         }

//     }
//     tempArr.length && res.push(tempArr)
//     return res
// };

var partition = function(s) {
  const dfs = (i) => {
      if (i === n) {
          ret.push(ans.slice());
          return;
      }
      for (let j = i; j < n; ++j) {
          if (f[i][j]) {
              ans.push(s.slice(i, j + 1));
              dfs(j + 1);
              ans.pop();
          }
      }
  }
  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
  let ret = [], ans = [];
  
  for (let i = n - 1; i >= 0; --i) {
      for (let j = i + 1; j < n; ++j) {
          f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1];
      }
  }
  dfs(0);
  return ret;
};

console.log(partition('ab'))
// 分割回文串 I

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition1 = function (s) {
    if (s.length == 1) return [[s]]
    let res = []
    res[0] = s.split('')
    let len = s.length
    let tempArr = []

    const dfs = (s, poi, index) => {

			if (poi === len) {
				return
			}

			// 一般情况
			let str = ''
			for (let i = poi, j = 2; i < len; j++) {
				str = s.substr(poi, j)
				console.log(i, j, 'str: ', str)
				if (str === str.split('').reverse().join('')) {
					console.log('reverse:', str.split('').reverse().join(''))
					if (!res[index]) res[index] = []
					res[index].push(str)
					dfs(s, poi + 1, index + 1)
				} else {
					// j = 1
					i = 1 + poi
					j = 1
					// dfs(s, i, index)
					console.log(i, j, '---')

					break
				}
			}
    }
		dfs(s, 0, 1)
    // for (let i = 0; i < len; i++) {
    //     for (let j = i + 1; j <= len; j++) {
    //         let temp = s.substr(i, j + 1)
    //         if (temp == temp.split('').reverse().join('')) {
    //             tempArr.push(temp)
    //         }
    //     }

    // }
    // tempArr.length && res.push(tempArr)
		console.log('res: ', res)
    return res
};

partition1('aab')
// partition1('aab')

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

// console.log(partition('abcaba'))
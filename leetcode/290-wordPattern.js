/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let len = pattern.length;
  s = s.split(' ')
  let len1 = s.length
  if (len !== len1) return fasle
  let obj = {}
  let obj1 = {}
  let rule1 = ''
  let rule2 = ''
  for (let i = 0; i < len; i++) {
    if (obj[pattern[i]]) {
      rule1 += obj[pattern[i]]
    } else {
      obj[pattern[i]] = i + 1
      rule1 += i + 1
    }
    if (obj1[s[i]]) {
      rule2 += obj1[s[i]]
    } else {
      obj1[s[i]] = i + 1
      rule2 += i + 1
    }
  }
  return rule1 === rule2
};

console.log(wordPattern('abba', "dog cat cat dog"))
console.log(wordPattern('abba', "dog cat cat mat"))


// 思路
/**
 * 首先对str进行切割，判断他们需要遍历的长度是否一致
 * 对他们进行遍历
 * 首先针对pattern，计算他的规则，举个例子：
 * 例如输入 abba => 1221
 * 然后对str进行规则转换
 * 即 dog cat cat dog => [dog, cat ,cat ,dog] => 1221
 * 最后对比两个规则是否一样
 */
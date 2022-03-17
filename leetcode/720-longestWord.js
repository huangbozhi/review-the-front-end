/* 给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。

若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const arr = words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    } else {
      return b.localeCompare(a)
    }
  })
  console.log(arr)
  let set = new Set()
  set.add('') // 一个字母的时候判断 添加到set对象里面
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i].slice(0, arr[i].length - 1))) {
      set.add(arr[i])
      res = arr[i]
    }
  }
  return res
}

let set = new Set()


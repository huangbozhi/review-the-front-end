/* 
假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。
 
*/
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
  if (!list1.length && !list2.length) return []
  const res = []
  let sum = -1
  list1.forEach((v, i) => {
    const j = list2.indexOf(v)
    if (j !== -1) {
      if (sum === -1 || sum >= i + j) {
        if (sum === i + j) {
          res.push(v)
        } else {
          res = []
          res[0] = v
        }
        sum = i + j
      }
    }
  })
  return res
}
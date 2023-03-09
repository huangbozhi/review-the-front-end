/* 给你一个长度为 n 的字符串数组 names 。你将会在文件系统中创建 n 个文件夹：在第 i 分钟，新建名为 names[i] 的文件夹。

由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，系统会以 (k) 的形式为新文件夹的文件名添加后缀，
其中 k 是能保证文件名唯一的 最小正整数 。

返回长度为 n 的字符串数组，其中 ans[i] 是创建第 i 个文件夹时系统分配给该文件夹的实际名称。

 */

/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const map = new Map()
  const n = names.length;
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const name = names[i];
    if (!map.has(name)) { // 没有则直接记录
      res[i] = name;
      map.set(name, 1); // 使用map保存记录
    } else {
      let k = map.get(name);
      while (map.has(`${name}(${k})`)) {
        k++;
      }
      res[i] = `${name}(${k})`;
      map.set(name, k + 1);
      map.set(`${name}(${k})`, 1);
    }
  }
  console.log('res: ', res)
  return res
}

getFolderNames(["onepiece", "onepiece(1)", "onepiece(2)", "onepiece(3)", "onepiece"])

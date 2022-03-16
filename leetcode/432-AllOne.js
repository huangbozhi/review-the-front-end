/* 
请你设计一个用于存储字符串计数的数据结构，并能够返回计数最小和最大的字符串。

实现 AllOne 类：

AllOne() 初始化数据结构的对象。
inc(String key) 字符串 key 的计数增加 1 。如果数据结构中尚不存在 key ，那么插入计数为 1 的 key 。
dec(String key) 字符串 key 的计数减少 1 。如果 key 的计数在减少后为 0 ，那么需要将这个 key 从数据结构中删除。测试用例保证：在减少计数前，key 存在于数据结构中。
getMaxKey() 返回任意一个计数最大的字符串。如果没有元素存在，返回一个空字符串 "" 。
getMinKey() 返回任意一个计数最小的字符串。如果没有元素存在，返回一个空字符串 "" 。

 */

var AllOne = function() {
  this.obj = {}
  this.first = false
  this.max = 0
  this.min = 0
  this.currentkey = null
  this.maxKey = null
  this.lastMinKey = null
  this.minKey = null
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  if (!this.first) {
    this.maxKey = key
    this.minKey = key
    this.first = true
  }
  this.currentkey = key
  if (Object.hasOwnProperty(key)) {
    this.obj[key] += 1
    if (this.max < this.obj[key]) {
      this.max = this.obj[key]
      this.maxKey = key
    }
  } else {
    this.obj[key] = 1
    this.max = this.max > 1 ? this.max : 1
    if (this.minKey) {
      this.lastMinKey = this.minKey
    }
    this.minKey = key
  }
}

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  if (Object.hasOwnProperty(key)) {
    this.obj[key] -= 1
    if (this.obj[this.maxKey] < this.obj[key]) {
      this.maxKey = key
    }
    if (this.minKey === key) {
      this.minKey = lastMinKey
    }
    if (!this.obj[key]) {
      delete this.obj.key
    }
  } else {
    this.minKey = null
    if (this.lastMinKey) {
      this.minKey = this.lastMinKey
    }
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  return this.maxKey || ''
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  return this.minKey || ''
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
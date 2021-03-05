/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.inputStack = [] // 进入
  this.outputStack = [] // 弹出
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inputStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.outputStack.length) {
    while (this.inputStack.length) {
      this.outputStack.push(this.inputStack.pop())
    }
  }
  return this.outputStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outputStack.length) {
    while (this.inputStack.length) {
      this.outputStack.push(this.inputStack.pop())
    }
  }
  return this.outputStack[this.outputStack.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.inputStack.length || this.outputStack.length) {
    return false
  }
  return true
};


// 思路
/**
 * 需要使用两个栈来实现数组的push,pop,peek,empty 方法
 * 只能舒勇Array的pop，push原生操作
 * 定义两个栈，一个是存放（inStack）的，一个是拿出（outStack）的
 * 
 * 将MyQueue push的值push到inStack里面，
 * 
 * 实现pop方法时，首先对outStack进行判断，如果存在值，则拿出(并删除)最后的一个值
 *  若不存在，则将inStack里的值全部去除放入outStack，然后再拿出(并删除)最后的一个值
 * 
 * 实现peek方法是，原理和pop一样，只是取出的时候不需要删除栈里的值
 * 
 * empty只需要判断两个数组的长度就行
 * 
 */
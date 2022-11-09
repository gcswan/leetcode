/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root ===  null) return []
  const res = [];
  const queue = [root];
  // let level = 0;
  while (queue.length !== 0) {
    let len = queue.length;
    res.push(queue.map((node) => node.val))  
    // level++
    // console.log({queue, len, level})
    while(len--) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
    // console.log('===========================')
  }
  return res;
};

const { test } = require('./BinarySearchTree')

console.log(levelOrder(test));
console.log(levelOrder(null));

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  if (!p && !q) return true;

  const q1 = [p];
  const q2 = [q];
  
  while(q1.length && q2.length) {
      console.log({q1, q2})
      let cur1 = q1.shift();
      let cur2 = q2.shift();

      if ((!cur1 && cur2) || (cur1 && !cur2) || cur1.val !== cur2.val) return false;
      if ((!!cur1.left != !!cur2.left) || (!!cur1.right != !!cur2.right)) return false;
      
      if (cur1.left) q1.push(cur1.left);
      if (cur1.right) q1.push(cur1.right);
      if (cur2.left) q2.push(cur2.left);
      if (cur2.right) q2.push(cur2.right);
  }

  return true;
    
};

const { BST } = require('./BinarySearchTree');

const test = new BST(3);
test.insert(2)
test.insert(5)

const test2 = new BST(3)
test2.insert(1)
test2.insert(4)

/* 

    3
   / \
  2   5 

    3
   / \
  1   4 

*/

console.log(isSameTree(test, test2))

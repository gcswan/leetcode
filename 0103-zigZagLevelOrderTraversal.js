
/**
 * Given the root of a binary tree, return the zigzag level order traversal of its 
 * nodes' values. (i.e., from left to right, then right to left for the next 
 * level and alternate between).

 * Definition for a binary tree node.
 */


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
  
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  if (root === null) return [];
  const zz = [];
  const q = [root];
  let level = 0;

  while(q.length) {
    console.log({q, level})
    let len = q.length;
    let levelNodes = q.map(node => node.val);
    if (level % 2 === 0) zz.push(levelNodes);
    else zz.push(levelNodes.reverse());
    while(len --) {
      let cur = q.shift();
      if(cur.left) q.push(cur.left);
      if(cur.right) q.push(cur.right);
    }
    level++
  }
  return zz;
};

console.log(zigzagLevelOrder(root))

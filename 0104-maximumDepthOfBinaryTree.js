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
 * @return {number}
 */

var maxDepth = function(root) {
    if (root === null) return 0;

    const q = [root];
    let depth = 0;

    while(q.length) {
        let len = q.length;
        while(len--){
            let cur = q.shift();
            if(cur.left) q.push(cur.left)
            if(cur.right) q.push(cur.right)
        }
        depth++;
    }

    return depth;
    
};

const { test } = require('./BinarySearchTree')

console.log(maxDepth(test));
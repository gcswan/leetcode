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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const q1 = [root.left];
  const q2 = [root.right];

  while (q1.length > 0 || q2.length > 0) {
    const n1 = q1.shift();
    const n2 = q2.shift();

    if (!n1 && !n2) continue;

    if (!n1 || !n2 || n1.val !== n2.val) return false;

    q1.push(n1.left);
    q1.push(n1.right);

    q2.push(n2.right);
    q2.push(n2.left);
  }

  return true; 
};


const test = {
  val:1, 
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  }
}

const test2 = {
  val: 1, 
  left: {
    val: 2,
    left: null,
    right: {
      val: 3, 
      left: null,
      right: null,
    }
  },
  right: {
    val: 2, 
    left: {
      val: 3, 
      left: null,
      right: null
    },
    right: null,
  },
}

const test3 = {
  val: 1, 
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 2, 
    left: null,
    right: null
  },
}
console.log(isSymmetric(test2))
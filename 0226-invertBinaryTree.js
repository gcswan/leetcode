const { test: tree } = require('./BinarySearchTree')

var invertTree = function (root) {
  if (!root) return 

  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

}

// const res = invertTree(tree);
console.log(JSON.stringify(tree, null, 2));
invertTree(tree)
console.log('=====================')
console.log(JSON.stringify(tree, null, 2));
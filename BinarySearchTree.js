class BST{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val && !this.left) {
      this.left = new BST(val);
    } else if (val < this.val && this.left) {
      this.left.insert(val);
    } else if (val >= this.val && !this.right) {
      this.right = new BST(val);
    } else if (val >= this.val && this.right) {
      this.right.insert(val);
    }
  }

  search(val) {
    if (val === this.val) {
      return true
    } else if (val < this.val && this.left) {
      return this.left.search(val);
    } else if (val >= this.val && this.right) {
      return this.right.search(val);
    } 
    return false;
  }

  inorder() {
    this.left && this.left.inorder();
    console.log(this.val);
    this.right && this.right.inorder();
  }

  preorder() {
    console.log(this.val);
    this.left && this.left.preorder();
    this.right && this.right.preorder();
  }

  postorder() {
    this.left && this.left.postorder();
    this.right && this.right.postorder();
    console.log(this.val);
  }
}

let test = new BST(10);
test.insert(8);
test.insert(5);
test.insert(12);
test.insert(11)
test.insert(15);
test.insert(2);
test.insert(9);



// console.log('----inorder-----')
// test.inorder();
// console.log('----preorder-----')
// test.preorder();
// console.log('----postorder-----')
// test.postorder();

module.exports = { test }



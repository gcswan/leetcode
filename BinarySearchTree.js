class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val && !this.left) {
      this.left = new Node(val);
    } else if (val < this.val && this.left) {
      this.left.insert(val);
    } else if (val >= this.val && !this.right) {
      this.right = new Node(val);
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

let bst = new Node(10);
bst.insert(8);
bst.insert(5);
bst.insert(12);
bst.insert(11)
bst.insert(15);
bst.insert(2);
bst.insert(9);

// console.log('----inorder-----')
// bst.inorder();
// console.log('----preorder-----')
// bst.preorder();
// console.log('----postorder-----')
// bst.postorder();



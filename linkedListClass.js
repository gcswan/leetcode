class List {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    let node = makeNode(value);

    if (!this.tail) {
      this.head = this.tail = node;

      this.length++;
      return;
    }

    this.tail.next = node;
    this.tail = node;

    this.length++;
    return node;
  }

  prepend(value) {
    let node = makeNode(value);

    if(!this.head) {
      this.head = this.tail = node;

      this.length++;
      return node;
    }
    
    node.next = this.head;
    this.head = node;

    this.length++;
    return node;
  }

  print() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

  getLength() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++
      current = current.next;
    }
    return count;
  }

  removeFirst() {
    // Is list empty? Give up here
    if(!this.head) {
      return null;
    }

    // Save a reference to the head,
    // then detach it by pointing 'head'
    // to the second node
    let nodeToRemove = this.head;
    this.head = nodeToRemove.next;

    // Truly detach this node by 
    // removing its link to the rest of 
    // the list
    nodeToRemove.next = null;

    // If this was the last node of the 
    // list, then we need to update the tail
    // too. 
    if(nodeToRemove === this.tail) {
      this.tail = null;
    }

    this.length--;
    return nodeToRemove;
  }

  findNodeBefore(node) {
    // Exit early if node is null
    if(!node) {
      return null;
    }

    // Start at the head
    let current = this.head;


    // Walk the list until 'current.next'
    // points at 'node', or until we're out
    // of nodes.
    while(current) {
      // Break out when we find the node
      if(current.next === node) {
        break;
      }

      // If this wasn't it, then advance
      // to the next one
      current = current.next;
    }

    return current;
  }

  removeLast() {
    // Is list empyt? Give up here
    if (!this.tail) {
      return null;
    }

    // Save a reference to the tail, 
    // then detach it by pointing 'tail'
    // at the previous node
    let nodeToRemove = this.tail;
    this.tail = this.findNodeBefore(this.tail);

    // remove any reference to 
    // the nodeToRemove
    this.tail.next = null;

    // If this was the last node in the list, 
    // update head
    if (nodeToRemove === this.head) {
      this.head = null;
    }

    this.length--;
    return nodeToRemove;
  }

  insert(value, asIndex) {
    let previous = null;
    let current = this.head; 
    let currentIndex = 0;

    // If the index is 0, negative, of falsy
    // we'll insert the node at the front
    if (asIndex <= 0 || !asIndex) {
      return this.prepend(value);
    }

    // If the index is at or past the end, insert
    // this new node at the end 
    if (asIndex >= this.length) {
      return this.append(value);
    }


    // Create a new node to insert
    let node = makeNode(value);

    // Walk through the list, looking for a place to put it.
    // Keep track of the previous node, we'll need it soon.
    while (current && currentIndex !== asIndex) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    // When this loop finishes, 'current' points at the 
    // node that currently holds the 'currentIndex' place
    // and the 'previous' is the node before it. We need both,
    // so that we can insert ours in the middle 
    previous.next = node; 
    node.next = current;

    this.length++;

    return node
  }

  remove(index) {
    // If the index is out of range, return null
    if (index < 0 || index >= this.length) {
      return null;
    }

    // Use our existing function if this is the
    // first node, rather than handling the 
    // special case of previous === null below
    if (index === 0) {
      return this.removeFirst();
    }

    // Start at the beginning
    let current = this.head;
    let previous = null;
    let currentIndex = 0; 

    // Walk along the list, keeping track of 'previous'
    // We'll need it to re-link our list
    while (current && currentIndex !== index) {
      previous = current; 
      current = current.next;
      currentIndex++;
    }

    // Link up the before and after nodes
    previous.next = current.next

    // Unlink this node by wiping out its next
    current.next = null;
    this.length--; 
    return current;
  }

}

function makeNode(value) {
  return {
    value: value, 
    next: null
  }
}


let test = new List();
test.append(1);
test.append(2);
test.append(3)
test.append(4)
test.append(5)

// console.log(test.removeFirst())
// console.log(test.removeLast())

// test.insert(7, 2) 
// test.remove(2)

// test.print();
// console.log('-------')

// console.log('length:', test.getLength());

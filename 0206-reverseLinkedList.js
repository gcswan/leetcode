const { list } = require('./linkedListClass');

console.log('list:', JSON.stringify(list.head, null, 2))

function reverseList(head) {
  let prev = null;
  let next = null;

  while (head !== null) {
    next = head.next;
    // console.log('next:', next)
    head.next = prev;
    // console.log('head.next:', head.next)
    prev = head;
    // console.log('prev: ', prev)
    head = next;
    // console.log('head: ', head)
    // console.log('---------------------');
  }
  return prev;
}
console.log(reverseList(list.head));

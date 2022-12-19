const { List, makeNode } = require('./LinkedList');
/**
 * @description You are given two non-empty linked lists representing two 
 * non-negative integers. The digits are stored in reverse order, and each 
 * of their nodes contains a single digit. Add the two numbers and return 
 * the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except 
 * the number 0 itself.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @example
 * // returns [7,0,8]
 * addTwoNumbers([2,4,3], [5,6,4])
 */
var addTwoNumbers = function(l1, l2) {
  let c1 = l1;
  let c2 = l2;
  let res = makeNode(0);
  let cRes = res;
  
  let remainder = 0;

  while (c1 || c2 || remainder) {
    // console.log('c1: ', c1.value, 'c2: ', c2.value);
    let sum = (c1 && c1.value || 0) + (c2 && c2.value || 0) + remainder;

    if (sum >= 10) {
      sum = sum % 10;
      remainder = 1;
    } else {
      remainder = 0;
    }

    // console.log('num:', sum)
    // console.log('remainder: ', remainder)
    c1 = c1 ? c1.next : null;
    c2 = c2 ? c2.next : null;

    let temp = makeNode(sum);
    cRes.next = temp;
    // console.log('cRes:', cRes);
    cRes = temp
    // console.log('------------------')
  }
  return res.next;
};

/**
 *
 *   Definition for singly-linked list.
 * 
 *   function ListNode (val, next) {
 *       this.val = (val===undefined ? 0 : val)
 *       this.next = (next===undefined ? null : next)
 *   }
 * 
 */

const l1 = new List();
const l2 = new List();
l1.append(2)
l1.append(4)
l1.append(3)
l2.append(5)
l2.append(6)
l2.append(4)

const l3 = new List();
const l4 = new List();
l3.append(3)
l3.append(4)
l3.append(7)
l4.append(9)
l4.append(6)
l4.append(2)

const result = addTwoNumbers(l1.head, l2.head);

console.log(JSON.stringify(result))

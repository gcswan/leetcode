var swapPairs = function(head) {
    if (head === null || head.next === null) return head
    let newhead = null
    let current = head
    let last = null
    while(current != null && current.next != null) {
        // console.log({current: current.val, next: current.next.val, last: last})
        let tmp = current
        current = current.next
        tmp.next = current.next
        current.next = tmp
        if (last !== null) last.next = current
        if (newhead == null) newhead = current
        last = current.next
        current = current.next.next
    }
    return newhead
};

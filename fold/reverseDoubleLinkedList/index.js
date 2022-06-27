function reverseDoubleLinkedList(llist) {
  let currNode = llist;
  let previous = null;
  while (currNode) {
    let next = currNode.next;
    currNode.next = previous;
    previous = currNode;
    currNode = next;
  }
  return previous;
}
/***
 * 
 * using recursion
 * function reverseDoubleLinkedList(llist) {
 * if(llist===null){
 * return llist;
 * }
 * 
 * else if(llist.next===null){
 * llist.next=llist.prev;
 * llist.prev=null;
 * return llist;
 * }
 
 * let pre=llist.prev
 * let next=llist.next
 * llist.next=pre
 * llist.prev=next
 * return reverseDoubleLinkedList(next)

 * 
 */
console.log(
  reverseDoubleLinkedList({
    data: 1,
    next: {
      data: 2,
      next: { data: 4, next: null },
    },
  })
);


[1,1,2,4]
[2,1,1]

StaticRange.push(1)


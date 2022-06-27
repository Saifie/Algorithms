function printLinkedList(head) {
  let currNode = head;

  while (currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}
console.log(
  printLinkedList({
    data: 16,
    next: { data: 13, next: null },
  })
);

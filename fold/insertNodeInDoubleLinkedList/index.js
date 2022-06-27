function Node(data) {
  return {
    data: data,
    next: null,
    prev: null,
  };
}
// we can you use the getAt(llist, position) aslo
function insertNodeInSortedDoubleLinkedList(llist, data) {
  let currNode = llist;
  let node = Node(data);
  // no element in linked list
  if (!currNode) {
    return (llist = node);
  }
  // when start element is greater than our node

  if (currNode.data > data) {
    llist = node;
    node.next = currNode;
    currNode.prev = node;
    return llist;
  }
  while (currNode.next) {
    if (currNode.data > data) {
      console.log(currNode.data);
      break;
    }
    currNode = currNode.next;
  }
  // when there is next element or last element is greater than our node

  if (currNode.next || currNode.data > data) {
    let prevNode = currNode.pre;
    node.prev = prevNode;
    prevNode.next = node;
    node.next = currNode;
    currNode.prev = node;
  }
  // when last is greater than our node simply insert it in last
  else {
    currNode.next = node;
    node.prev = currNode;
  }
  return llist;
}
console.log(
  insertNodeInSortedDoubleLinkedList(
    {
      data: 2,
      next: {
        data: 4,
        next: { data: 6, next: null },
      },
    },
    5
  )
);
// 2-4-6

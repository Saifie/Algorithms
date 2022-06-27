function Node(data) {
  return {
    data: data,
    next: null,
  };
}
function getAt(llist, position) {
  let currNode = llist;
  let count = 0;

  while (currNode) {
    if (count === position) {
      return currNode;
    }
    count++;
    currNode = currNode.next;
  }
  return null;
}
function insertNodeAtTail(head, data) {
  let node = Node(data);
  let currNode = head;
  if (!currNode) {
    head = node;
  } else {
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
  }
  return head;
}

function deleteDuplicateValueNodeFromLinkedList(head) {
  let currNode = head;
  while (currNode.next) {
    if (currNode.next.data === currNode.data) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  return head;
}
console.log(
  deleteDuplicateValueNodeFromLinkedList({
    data: 1,
    next: {
      data: 2,
      next: { data: 2, next: { data: 3, next: { data: 3, next: null } } },
    },
  })
);

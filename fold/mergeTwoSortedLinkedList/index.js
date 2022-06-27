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

function mergeTwoSortedLinkedList(head1, head2) {
  let currNode1 = head1;
  let currNode2 = head2;
  let node = null;
  while (currNode1 && currNode2) {
    if (currNode1.data <= currNode2.data) {
      node = insertNodeAtTail(node, currNode1.data);
      currNode1 = currNode1.next;
    } else {
      node = insertNodeAtTail(node, currNode2.data);
      currNode2 = currNode2.next;
    }
  }
  while (currNode2) {
    node = insertNodeAtTail(node, currNode2.data);
    currNode2 = currNode2.next;
  }
  while (currNode1) {
    node = insertNodeAtTail(node, currNode1.data);
    currNode1 = currNode1.next;
  }
  return node;
}
console.log(
  mergeTwoSortedLinkedList(
    {
      data: 1,
      next: {
        data: 2,
        next: { data: 4, next: null },
      },
    },
    {
      data: 2,
      next: {
        data: 3,
        next: { data: 7, next: null },
      },
    }
  )
);
// by
function MergeLists(a, b) {
  if (a == null) {
    return b;
  } else if (b == null) {
    return a;
  }

  if (a.data < b.data) {
    a.next = MergeLists(a.next, b);
    return a;
  } else {
    b.next = MergeLists(a, b.next);
    return b;
  }
}

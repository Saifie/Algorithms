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

function getPositionFromTail(llist, position) {
  let currNode = llist;
  let arr = [];
  while (currNode) {
    arr.unshift(currNode.data);
    currNode = currNode.next;
  }
  return arr[position];
}
console.log(
  getPositionFromTail(
    {
      data: 16,
      next: {
        data: 13,
        next: { data: 7, next: null },
      },
    },
    0
  )
);

// function compareTwoLinkedLists(llist1, llist2) {
//   let currNode1 = llist1;
//   let currNode2 = llist2;
//   while (currNode1 && currNode2) {
//     if (currNode1.data !== currNode2.data) {
//       return 0;
//     }
//     currNode1 = currNode1.next;
//     currNode2 = currNode2.next;
//   }
//   if (currNode1 !== currNode2) {
//     return 0;
//   }

//   return 1;
// }
// function reversePrint(llist) {
//   let currNode = llist;
//   let arr = [];
//   while (currNode) {
//     arr.unshift(currNode.data);

//     currNode = currNode.next;
//   }
//   for (let i of arr) {
//     console.log(i);
//   }
// }
// function reverseLinkedList(llist) {
//   let currNode = llist;
//   let prevNode = null;
//   while (currNode) {
//     let nextNode = currNode.next;
//     currNode.next = prevNode;
//     prevNode = currNode;
//     currNode = nextNode;
//   }
//   return prevNode;
// }
// function deleteNode(llist, position) {
//   let currNode = llist;
//   if (!currNode) {
//     return llists;
//   }
//   if (position === 0) {
//     llist = llist.next;
//     return llist;
//   }
//   let previousNode = getAt(llist, position - 1);
//   if (previousNode && previousNode.next) {
//     previousNode.next = previousNode.next.next;
//   }

//   return llist;
// }

// function insertNodeAtPosition(llist, data, position) {
//   let node = Node(data);
//   let currNode = llist;
//   if (!currNode) {
//     return (llist = node);
//   }
//   if (position === 0) {
//     node.next = currNode;
//     llist = node;
//     return llist;
//   }
//   let previousNode = getAt(llist, position - 1);
//   console.log(currNode);
//   if (previousNode) {
//     let nextNode = previousNode.next;
//     previousNode.next = node;
//     node.next = nextNode;
//   }

//   return llist;
// }

// function insertNodeAtllist(head, data) {
//   let node = Node(data);
//   let currNode = head;
//   node.next = currNode;
//   head = node;
//   return head;
// }
// function insertNodeAtTail(head, data) {
//   let node = Node(data);
//   currNode = head;
//   if (!currNode) {
//     head = node;
//   } else {
//     while (currNode.next) {
//       currNode = currNode.next;
//     }
//     currNode.next = node;
//   }
//   return head;
// }

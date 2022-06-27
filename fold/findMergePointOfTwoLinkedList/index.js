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

function findMergePointOfTwoLinkedList(headA, headB) {
  let currNode1 = headA;
  let currNode2 = headB;

  while (currNode1 !== currNode2) {
    // console.log("currNode1: " + currNode1, "currennode2", currNode2);
    if (currNode1 && currNode1.next === null) {
      currNode1 = headB;
    } else {
      currNode1 = currNode1.next;
    }
    if (currNode2 && currNode2.next === null) {
      currNode2 = headA;
    } else {
      currNode2 = currNode2.next;
    }
  }
  return currNode2.data;
}
// 1-2-3-null    1,1   2,3   3 1  1,2    3, 3
// 1-3-null
console.log(
  findMergePointOfTwoLinkedList(
    {
      data: 1,
      next: {
        data: 2,
        next: { data: 3, next: null },
      },
    },
    {
      data: 1,
      next: {
        data: 3,
        next: null,
      },
    }
  )
);

// let currNode1 = headA;
// while (currNode1) {
//   let currNode2 = headB;
//   while (currNode2) {
//     if (currNode1 === currNode2) {
//       return currNode1.data;
//     } else {
//       currNode2 = currNode2.next;
//     }
//   }

//   currNode1 = currNode1.next;
// }
// return null;

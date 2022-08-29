class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
class BSTIterator {
  stack = new Stack();
  reverse = true;
  constructor(root, reverse) {
    pushAll(root);
    this.reverse = reverse;
  }
  hasNext() {
    return this.stack.data.length !== 0;
  }
  next() {
    let node = this.stack.pop();
    if (reverse) {
      if (node.left) {
        pushAll(node.left);
      }
    } else {
      if (node.right) {
        pushAll(node.right);
      }
    }
    return node.data;
  }

  pushAll(root) {
    while (root !== null) {
      this.stack.push(root);
      if (ths.reverse) {
        root = root.right;
      } else {
        root = root.left;
      }
    }
  }
}

class TwoSumForBST {
  twoSum(root, k) {
    if (root.null) return false;
    let left = new BSTIterator(root, false);
    let right = new BSTIterator(root, true);
    right = right.next();
    left = left.next();
    while (left < right) {
      if (left + right == k) {
        return true;
      }
      if (left + right < k) {
        left = left.next();
      } else {
        right = right.next();
      }
    }
  }
}

// another method

class TwoSumForBST {
  set = new Set();
  twoSum(root, k, set) {
    if (root === null) return false;
    if (set.has(k - root.data)) {
      return true;
    }
    if (this.twoSum(root.left, k, this.set) === true) {
      return true;
    }
    set.add(root.data);

    return this.twoSum(root.right, k, this.set);
  }
}

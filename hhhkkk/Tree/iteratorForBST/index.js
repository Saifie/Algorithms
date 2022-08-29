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
class Iterator {
  stack = new Stack();
  constructor(root) {
    pushAll(root);
  }
  hasNext() {
    return this.stack.data.length !== 0;
  }
  next() {
    let node = this.stack.pop();
    if (node.right) {
      pushAll(node.right);
    }
    return node.data;
  }

  pushAll(root) {
    while (root !== null) {
      this.stack.push(root);
      root = root.left;
    }
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

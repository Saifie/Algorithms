class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function createTree(indexes, queries) {
  let root = new Node(1);
  let q = [root];
  for (let i = 0; i < indexes.length; i++) {
    let root = q.shift();
    if (indexes[i][0] !== -1) {
      root.left = new Node(indexes[i][0]);
      q.push(root.left);
    }
    if (indexes[i][1] !== -1) {
      root.right = new Node(indexes[i][1]);
      q.push(root.right);
    }
  }
  return root;
}

function swap(root, k, level, l) {
  if (root === null) {
    return null;
  }
  if (level === k) {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }
  swap(root.left, k, level + 1, l);
  l.push(root.data);
  swap(root.right, k, level + 1, l);
}

let result = [];
for (let i = 0; i < queries.length; i++) {
  l = [];
  swap(root, queries[i], 1, l);
}

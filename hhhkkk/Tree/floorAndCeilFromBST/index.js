function floorAndCeilFromBst(tree, k) {
  // floor
  if (tree === null) {
    return;
  }
  let ans = null;
  while (root !== null) {
    if (root.data === k) return root.data;
    if (root.data > k) root = root.left;
    if (root.data < k) {
      ans = root.data;
      root = root.right;
    }
  }
  return ans;
}
function floorAndCeilFromBst(tree, k) {
  // ceil
  if (tree === null) {
    return;
  }
  let ans = null;
  while (root !== null) {
    if (root.data === k) return root.data;
    if (root.data > k) {
      ans = root.data;
      root = root.left;
    }
    if (root.data < k) root = root.right;
  }
  return ans;
}

//    8

//  6       12
// 2  4   9     13

// 7

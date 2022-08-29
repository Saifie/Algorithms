function circularRotation(a, k, queries) {
  let result = [];
  for (var i = 0; i < k; i++) {
    a.unshift(a[a.length - 1]);
    a.pop();
  }
  for (var i = 0; i < queries.length; i++) {
    let query = queries[i];
    result.push(a[query]);
  }
  return result;
}
console.log(circularRotation([1, 2, 3], 2, [0, 1, 2]));

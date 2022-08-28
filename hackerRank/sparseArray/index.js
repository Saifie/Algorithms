function parseArray(strings, queries) {
  let array = [];
  for (let i = 0; i < queries.length; i++) {
    let val = 0;
    let currElement = queries[i];

    for (let j = 0; j < strings.length; j++) {
      if (currElement === strings[j]) {
        val++;
      }
    }
    array.push(val);
  }
  return array;
}
function parseArray2(strings, queries) {
  let array = [];
  let hash = {};
  for (let i = 0; i < queries.length; i++) {
    let currElement = queries[i];
    hash[currElement] = 0;
  }
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] in hash) {
      hash[strings[i]]++;
    }
  }
  for (let i in hash) {
    array.push(hash[i]);
  }
  return array;
}
console.log(parseArray2(["lekgdisnsbfdzpqlkg"], ["aba", "xzxb", "ab"]));

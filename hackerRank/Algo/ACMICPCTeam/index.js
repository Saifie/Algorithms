function compare(a, b) {
  let count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === "0" && b[i] === "0") {
    } else {
      count++;
    }
  }
  return count;
}
function findMaxCount(array) {
  let max = array[0];
  let arr = [];
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    max = Math.max(max, array[i]);
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === max) {
      count++;
    }
  }
  arr.push(max);
  arr.push(count);
  return arr;
}
function ACMICPCTEAM(topic) {
  let maxCount = 0;
  let array = [];
  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let first = topic[i];
      let second = topic[j];
      let val = compare(first, second);
      if (maxCount < val) {
        array.push(val);
      }
    }
  }
  return findMaxCount(array);
}

console.log(ACMICPCTEAM(["10101", "11100", "11010", "00101"]));

// a = 0;
// b;
// while (a === b) {}

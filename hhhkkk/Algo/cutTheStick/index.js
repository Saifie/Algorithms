function cutTheStick(arr) {
  let xCount = 0;
  let length = [arr.length];

  while (true) {
    let smaller = Number.POSITIVE_INFINITY;
    if (xCount === arr.length) {
      break;
    }
    for (var i = 0; i < arr.length; i++) {
      if (parseInt(arr[i])) {
        smaller = Math.min(smaller, arr[i]);
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "-") {
      } else if (arr[i] === smaller) {
        arr[i] = "-";
        xCount++;
      } else {
        arr[i] = arr[i] - smaller;
      }
    }
    length.push(arr.length - xCount);
  }
  length.pop();

  return length;
}
console.log(cutTheStick([1, 2, 3, 4, 3, 3, 2, 1]));

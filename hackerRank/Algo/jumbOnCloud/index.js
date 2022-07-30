function jumpOnTheCloud(c) {
  let count = 0;
  let path = 0;
  while (count < c.length) {
    console.log({ count });
    if (c[count + 1] === 0 && c[count + 2] === 1) {
      count++;
    } else if (
      (c[count + 1] === 0 && c[count + 2] === 0) ||
      c[count + 1] === 1
    ) {
      count += 2;
    } else {
      count++;
    }
    path++;
  }
  return path - 1;
}

console.log(jumpOnTheCloud([0, 0, 0, 0, 1, 0]));

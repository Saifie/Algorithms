function ArrayLessor(A, B, C) {
  let greater = 0;
  let lesser = 0;

  A.forEach((item) => {
    if (item > C) {
      greater++;
    }
  });
  B.forEach((item) => {
    if (item < C) {
      lesser++;
    }
  });

  return Math.max(greater, lesser);
}

console.log(ArrayLessor([1, 10, 100], [9, 9, 9], 50));

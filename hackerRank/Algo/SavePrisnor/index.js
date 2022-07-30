function savePrisnor(n, m, s) {
  let reminCandy = m % n;

  console.log({ people: n, reminCandy, tot: n - reminCandy });
  let pointer1 = s;

  if (pointer1 + reminCandy > n + 1) {
    return reminCandy - (n - reminCandy);
  } else {
    return pointer1 + reminCandy - 1;
  }
}

console.log(savePrisnor(3, 7, 3));

6;
3;
6 - 3;
3;

// 1->2->3

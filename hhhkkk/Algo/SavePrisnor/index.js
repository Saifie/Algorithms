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
function savePrisnor1(n, m, s) {
  let rem = m % n;
  console.log({ rem });
  if (rem + s - 1 === 0) {
    return rem2;
  }

  return (rem + s - 1) % n;
}

// 10 15  3
console.log(savePrisnor1(19, 326960619, 13));

6;
3;
6 - 3;
3;

3, 2, 3;

3;

// 1->2->3

3;
6;

// 9  3   4
// n > m;
2;
// 1 ,2 3

5, 6, 2;

function howManyGames(p, d, m, s) {
  let count = 0;
  let step = 0;
  while (count < s) {
    count += p;
    if (p - d < m) {
      p = m;
    } else {
      p -= d;
    }
    if (count > s) {
      break;
    }

    step++;
    console.log({ p, count, step });
  }
  return step;
}
console.log(howManyGames(20, 3, 6, 80));

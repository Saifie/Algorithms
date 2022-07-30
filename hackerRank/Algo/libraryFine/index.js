function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (
    (d2 >= d1 && m2 >= m1 && y2 >= y1) ||
    (d2 < d1 && m2 > m1 && y2 >= y1) ||
    y2 > y1
  ) {
    return 0;
  }
  if (y2 === y1 && m2 === m1 && d1 > d2) {
    let dif = +d1 - d2;
    return dif * 15;
  }
  if (y2 === y1 && m2 < m1) {
    let dif = +m1 - m2;
    return dif * 500;
  }
  if (y1 > y2) {
    return 10000;
  }
}
console.log(libraryFine("9", "8", "2018", "6", "6", "2015"));

// 6 2 2016
// 3 4 2016

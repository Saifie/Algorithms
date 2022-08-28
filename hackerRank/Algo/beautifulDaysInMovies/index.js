function beautifulDaysInMovies(i, j, k) {
  let count = 0;
  for (var i = i; i <= j; i++) {
    let reverse = parseInt(i.toString().split("").reverse().join(""));
    let difference = Math.abs(i - reverse);
    if (difference % k === 0) {
      count++;
    }
  }
  return count;
}
console.log(beautifulDaysInMovies(20, 23, 6));

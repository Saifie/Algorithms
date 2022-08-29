function viralAdvertizing(n) {
  let shared = 5;
  let liked = Math.floor(shared / 2);
  let sum = liked;

  for (var i = 1; i < n; i++) {
    shared = liked * 3;
    liked = Math.floor(shared / 2);
    sum += liked;
  }
  return sum;
}
console.log(viralAdvertizing(5));

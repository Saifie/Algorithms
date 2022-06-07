function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  apples.forEach((appleDistance) => {
    let distance = a + appleDistance;
    if (distance <= t && distance >= s) {
      appleCount++;
    }
  });
  oranges.forEach((orangesDistance) => {
    let distance = b + orangesDistance;
    if (distance <= t && distance >= s) {
      orangeCount++;
    }
  });
  console.log(appleCount);
  console.log(orangeCount);
}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));

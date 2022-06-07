function breakingRecords(scores) {
  // Write your code here
  let minCount = 0;
  let maxCount = 0;
  let best = scores[0];
  let worst = scores[0];
  for (let i = 0; i < scores.length; i++) {
    let currElement = scores[i];
    if (currElement >= best) {
      if (currElement !== best) {
        maxCount++;
      }

      best = currElement;
    } else if (currElement < worst) {
      if (currElement !== worst) {
        minCount++;
      }
      worst = currElement;
    }
  }
  return maxCount, minCount;
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

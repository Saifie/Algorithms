function BirthDayCakeCandle(arr) {
  let tallestCount = 0;
  let tallest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (tallest < arr[i]) {
      tallest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (tallest == arr[i]) {
      tallestCount++;
    }
  }
  return tallestCount;
}

console.log(BirthDayCakeCandle([3, 4, 1, 3, 4, 3]));

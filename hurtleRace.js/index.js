function hurdleRace(k, height) {
  let minJumped = 0;

  for (let i = 0; i < height.length; i++) {
    let diff = height[i] - k;
    if (diff > minJumped) {
      minJumped = diff;
    }
  }
  return minJumped;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));

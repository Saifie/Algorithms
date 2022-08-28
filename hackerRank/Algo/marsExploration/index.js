function marsExploration(s) {
  let n = s.length;
  let send = n / 3;
  let count = 0;
  let word = "SOS";
  let pointer1 = 0;
  for (let i = 0; i < n; i++) {
    if (pointer1 === 3) {
      pointer1 = 0;
    }
    if (word[pointer1] !== s[i]) {
      count++;
    }
    pointer1++;
  }
  return count;
}

console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));

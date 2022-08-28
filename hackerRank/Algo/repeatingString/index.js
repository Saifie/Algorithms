function repeatingString(s, n) {
  let length = s.length;
  let aCount = 0;
  for (let i = 0; i < length; i++) {
    if (s[i] === "a") {
      aCount++;
    }
  }
  let multiplier = Math.floor(n / length);
  let reminder = Math.floor(n % length);
  let inReminder = 0;

  let inMultiplier = multiplier * aCount;
  for (let i = 0; i < reminder; i++) {
    if (s[i] === "a") {
      inReminder++;
    }
  }

  return inMultiplier + inReminder;
}
console.log(repeatingString("aba", 10));

// function repeatingString(s, a) {
//     let newString = s.split("");
//     let count = s.length;
//     let added = 0;
//     while (true) {
//       if (count > n) {
//         break;
//       }
//       console.log({ newString, count });
//       newString.push(s[added]);
//       count++;
//       if (added === s.length - 1 && s[added] === s[s.length - 1]) {
//         added = 0;
//       } else {
//         added++;
//       }
//     }
//     let aCount = 0;
//     for (let i of newString) {
//       if (i === "a") {
//         aCount++;
//       }
//     }
//     return aCount;
//   }

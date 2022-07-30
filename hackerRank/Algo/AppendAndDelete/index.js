function AppendAndDelete(s, t, k) {
  let differIndex = -1;
  let length = s.length;

  length = Math.min(length, t.length);
  for (let i = 0; i < length; i++) {
    if (s[i] === t[i]) {
    } else {
      differIndex = i;
      break;
    }
  }
  // its mean loop  did not run
  //  or it ends before finding differ which mean all have same character perent so we
  // initialize it as length
  if (differIndex === -1) {
    differIndex = length;
  }
  let removeNeed = s.length - differIndex;
  let inserNedd = t.length - differIndex;
  console.log({ removeNeed, inserNedd, differIndex });

  //if k is greater or equal to sum od add and remove it return true if remove is not zero
  //else no
  // if k is greter and remove is 0 we need to remove  and insert with different logic
  //    to make it equal
  // k is 10 so length of sum s and t need to even
  // for this let say     s=abcd  4 t=abcdtex 7   k=10
  //   as we know remove is 0  4 +7 =11 (odd)
  //     we if remove 4 and add 7  to make t so on...
  //       4  7  11
  //       3  6  9
  //       2  5  7
  //       1  4  5
  //     mean if sum of length is odd than it need odd operations k
  //   same  for odd
  //
  //
  //
  // another cas if k is large so we can reduce it by removing from empty string s
  //  upto the length of t
  //   also this case ckeck if k is odd

  if (inserNedd + removeNeed <= k) {
    if (removeNeed === 0) {
      if (
        (k % 2 === 0 && (t.length + s.length) % 2 === 0) ||
        // (k % 2 !== 0 && (t.length + s.length) % 2 !== 0) ||
        k - s.length >= t.length
      ) {
        return "Yes";
      } else {
        return "No";
      }
    }
    return "Yes";
  }
  return "No";
}

console.log(AppendAndDelete("zzz", "zzzzz", 7));

// dfff;
// xfff;
// 8;
// dfff;
// dxff;
// 6;
// dfff;
// dfxf;
// 4;

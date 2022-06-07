function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  for (var i = 0; i < s.length; i++) {
    if (m === 1 && s[i] === d) {
      return (count = 1);
    }
    let newArr = s.slice(i, m + i);
    let store = 0;
    for (var j = 0; j < newArr.length; j++) {
      store += newArr[j];
    }
    if (store === d) {
      count++;
    }
  }
  return count;
}

console.log(birthday([4], 4, 1));

// function birthday(s, d, m) {
//     // Write your code here
//     let count = 0;
//     for (var i = 0; i < s.length; i++) {
//       for (let j = i + 1; j < m + i; j++) {
//         if (s[j]) {
//           if (s[i] + s[j] === d) {
//             count++;
//           }
//         }
//       }
//       if (m === 1 && s[i] === d) {
//         count++;
//       }
//     }
//     return count;
//   }

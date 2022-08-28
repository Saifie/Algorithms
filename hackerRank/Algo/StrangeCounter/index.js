function strangeCounter(t) {
  let counter = 3;
  let original = 3;

  for (var i = 1; i <= t; i++) {
    // console.log({ i, counter, original });
    if (counter === 1) {
      if (i === t) {
        continue;
      }
      original = original * 2;
      counter = original;
    } else {
      if (i === t) {
        continue;
      }
      counter--;
    }
  }

  return counter;
}
console.log(strangeCounter(22));

// function strangeCounter(t) {
//     let counter = 3;
//     let original = 3;

//     for (var i = 1; i <= t; i++) {
//       // console.log({ i, counter, original });
//       if (counter === 1) {
//         if (i === t) {
//           continue;
//         }
//         original = original * 2;
//         counter = original;
//       } else {
//         if (i === t) {
//           continue;
//         }
//         counter--;
//       }
//     }

//     return counter;
//   }

// 1  3
// 4  6
// 10 12
//    22  24

//    22-3+1

// 22

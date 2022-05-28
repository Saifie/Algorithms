function chpisFactory(A) {
  let returnArr = [];
  let zerCount = 0;
  for (let i = 0; i < A.length; i++) {
    let currElement = A[i];
    if (currElement === 0n) {
      zerCount++;
    } else {
      returnArr.push(currElement);
    }
  }
  while (zerCount > 0) {
    returnArr.push(0);
    zerCount--;
  }
  return returnArr;
}

console.log(chpisFactory([0n, 1n, 2n, 3n]));

// function time(s) {
//     let newTime = s;
//     let [hours, min, seconds] = s.split(":");
//     let isAm = seconds.slice(seconds.length - 2, seconds.length);
//     console.log("s", hours, min, seconds, isAm);
//     if (isAm.toLowerCase(s) == "pm") {
//       if (hours != 12) {
//         newTime = `${+hours + 12}:${min}:${seconds.slice(0, 2)}`;
//       } else {
//         newTime = `${hours}:${min}:${seconds.slice(0, 2)}`;
//       }
//     } else {
//       if (hours != 12) {
//         newTime = `${hours}:${min}:${seconds.slice(0, 2)}`;
//       } else {
//         newTime = `0${+hours - 12}:${min}:${seconds.slice(0, 2)}`;
//       }
//     }

//     console.log(newTime);
//   }

//   time("03:44:33AM");

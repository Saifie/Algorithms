const climbingLeaderboard = (rankArr, playerArr) => {
  rankArr = [...new Set(rankArr)];
  const positions = [];
  for (let i = 0; i < playerArr.length; i++) {
    let position = 1;
    for (let j = 0; j < rankArr.length; j++) {
      if (playerArr[i] >= rankArr[j]) {
        positions.push(position);
        break;
      } else {
        position += 1;
      }
      if (
        rankArr[rankArr.length - 1] > playerArr[i] &&
        rankArr.length === position
      ) {
        positions.push(position + 1);
      }
    }
  }

  return positions;
};
console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);

// 6
// 4
// 2
// 1

// const climbingLeaderboard = (rankArr, playerArr) => {
//   rankArr = [...new Set(rankArr)];

//   const positions = [];
//   for (let i = 0; i < playerArr.length; i++) {
//     while (playerArr[i] >= rankArr[rankArr.length - 1]) {
//       rankArr.pop();
//     }
//     positions.push(rankArr.length + 1);
//   }

//   return positions;
// };
// console.log(climbingLeaderboard([100, 90, 80, 75, 60], [50, 65, 77, 90, 102]));

// 6
// 4
// 2
// 1

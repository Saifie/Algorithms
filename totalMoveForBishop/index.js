function TotalMoveForBishop(A, B) {
  let left = B - 1;
  let right = 8 - B;
  let down = 8 - A;
  let top = A - 1;

  let upLeft = left < top ? left : top;
  let upRight = right < top ? right : top;
  let downRight = right < down ? right : down;
  let downLeft = left < down ? left : down;
  return upLeft + upRight + downRight + downLeft;
}

console.log(TotalMoveForBishop(4, 4));

// function na(A, B) {
//   count = 0;
//   for (var i = A + 1, j = B + 1; i <= 8 && j <= 8; i++, j++) {
//     count++;
//   }
//   for (var i = A - 1, j = B - 1; i >= 1 && j >= 1; i--, j--) {
//     count++;
//   }
//   for (var i = A + 1, j = B - 1; i <= 8 && j >= 1; i++, j--) {
//     count++;
//   }
//   for (var i = A - 1, j = B + 1; i >= 1 && j <= 8; i--, j++) {
//     count++;
//   }
//   return count;
// }

// [[1,2,3,4,5,6,7,8],
// [1,2,3,4,5,6,7,8],
// [1,2,3,4,5,6,7,8],
// [1,2,3,4,5,6,7,8],4,4
// [1,2,3,4,5,6,7,8],
// [1,2,3,4,5,6,7,8],
// [1,2,3,4,5,6,7,8],
// [1,2,3,4,5,6,7,8]]

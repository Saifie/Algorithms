function pickingNumber(a) {
  let hashMap = Array(a.length).fill(0);
  for (var i = 0; i < a.length; i++) {
    let currElement = a[i];
    if (hashMap[currElement]) {
      hashMap[currElement]++;
    } else {
      hashMap[currElement] = 1;
    }
  }
  console.log(hashMap);
  let total = 0;
  for (var i = 1; i < a.length; i++) {
    let currElement = hashMap[i];
    let previousElement = hashMap[i - 1];
    console.log(i, currElement + previousElement);
    total = Math.max(total, currElement + previousElement);
  }
  return total;
}
[3, 3, 4, 5, 6];

console.log(pickingNumber([4, 6, 5, 3, 3]));

// function pickingNumber(a) {
//     var sort = a.sort(function (a, b) {
//       return a - b;
//     });

//     var i = 0;
//     var j = 1;

//     while (i < sort.length && j < sort.length) {
//       if (Math.abs(sort[i] - sort[j]) > 1) {
//         i++;
//         j++;
//       } else {
//         j++;
//       }
//     }
//     return Math.abs(i - j);
//   }
// 84, 43, 11, 41, 2, 99, 31, 32, 56, 53, 42, 14, 98, 27, 64, 57, 16, 33, 34,
// 48, 21, 46, 61, 87, 90, 28, 12, 62, 49, 29, 77, 82, 70, 80, 89, 95, 52, 13,
// 19, 9, 79, 35, 67, 51, 39, 7, 1, 66, 8, 17, 85, 71, 97, 34, 73, 75, 6, 91,
// 40, 96, 65, 37, 74, 20, 68, 23, 47, 76, 55, 24, 42, 3, 30, 22, 55, 5, 69,
// 86, 54, 50, 10, 59, 15, 4, 36, 38, 83, 60, 72, 63, 78, 58, 88, 93, 45, 18,
// 94, 44, 92, 81, 25, 26,

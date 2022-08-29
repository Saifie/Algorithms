function ElectronicsShop(keyboards, drives, b) {
  let pointer1 = 0;
  let pointer2 = 0;
  let sum = 0;
  keyboards.sort((a, b) => a - b);
  drives.sort((a, b) => b - a);
  while (pointer1 < keyboards.length) {
    let currKeyBoard = keyboards[pointer1];
    let curDrive = drives[pointer2];
    if (currKeyBoard + curDrive <= b) {
      if (currKeyBoard + curDrive > sum) {
        sum = currKeyBoard + curDrive;
      }
      pointer1++;
      pointer2 = 0;
    } else {
      pointer2++;
    }
    if (pointer2 === drives.length) {
      pointer1++;
      pointer2 = 0;
    }
  }
  if (sum) {
    return sum;
  }

  return -1;
}
console.log(ElectronicsShop([40, 50, 60], [5, 8, 12], 60));

// [40,50,60]
// [12,8,5]

//works but some maybe need modification
// function ElectronicsShop(keyboards, drives, b) {
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let sum = 0;
//   while (pointer1 < keyboards.length) {
//     // console.log({ pointer2, pointer1 });
//     let currKeyBoard = keyboards[pointer1];
//     let curDrive = drives[pointer2];
//     if (currKeyBoard + curDrive <= b) {
//       if (currKeyBoard + curDrive > sum) {
//         sum = currKeyBoard + curDrive;
//       }
//       //   console.log(sum);
//       pointer2++;
//     } else {
//       pointer1++;
//     }
//     if (pointer2 === drives.length) {
//       pointer1++;
//       pointer2 = 0;
//     }
//   }
//   if (sum) {
//     return sum;
//   }

//   return -1;
// }
// brute force
// function ElectronicsShop(keyboards, drives, b) {
//     let sum = 0;
//     for (var i = 0; i < keyboards.length; i++) {
//       let currElement = keyboards[i];
//       for (var j = 0; j < drives.length; j++) {
//         if (drives[j] + currElement > sum && drives[j] + currElement <= b) {
//           sum = drives[j] + currElement;
//         }
//       }
//     }
//     if (sum) {
//       return sum;
//     }
//     return -1;
//   }

// not work but trying

// function ElectronicsShop(keyboards, drives, b) {
//     let totsum = 0;
//     let length = keyboards.length;
//     if (drives.length > length) {
//       length = drives.length;
//     }
//     for (var i = 0; i < length; i++) {
//       let sum = 0;
//       let currKeyBoard = keyboards[i];
//       let currElement = drives[i];
//       let afterBuYPC;

//       if (!currKeyBoard) {
//         afterBuYPC = b - currElement;
//       } else {
//         afterBuYPC = b - currKeyBoard;
//       }
//       console.log("afterBuYPC", afterBuYPC);
//       if (afterBuYPC <= 0 || !afterBuYPC || !currElement) {
//         continue;
//       }
//       if (currElement > sum && currElement < afterBuYPC) {
//         sum = currElement;
//         totsum = sum + currKeyBoard;
//       }
//     }
//     if (totsum) {
//       return totsum;
//     }
//     return -1;
//   }

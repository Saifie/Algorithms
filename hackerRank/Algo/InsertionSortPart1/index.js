function insertionSortPart1(n, arr) {
  let element = arr[n - 1];
  for (var i = arr.length - 2; i >= 0; i--) {
    let currElement = arr[i];
    if (currElement > element) {
      arr[i + 1] = currElement;
    } else if (currElement <= element) {
      arr[i + 1] = element;
      // console.log(arr.join(" "));
      break;
    }
    // console.log(arr.join(" "));
  }
  if (element < arr[0]) {
    arr[0] = element;
    console.log(arr.join(" "));
  }
  return arr;
}
function insertionSortPart2(arr) {
  for (let j = 1; j < arr.length; j++) {
    let element = arr[j];

    for (var i = j - 1; i >= 0; i--) {
      let currElement = arr[i];

      if (currElement > element) {
        arr[i + 1] = currElement;
      } else if (currElement <= element) {
        arr[i + 1] = element;
        break;
      }
    }
    if (element < arr[0]) {
      arr[0] = element;
    }
    console.log(arr.join(" "));
  }

  return arr;
}

console.log(insertionSortPart2([3, 1, 3, 5, 6, 2]));

// for (var i = 1; i < arr.length; i++) {
//     let temp = arr[i];
//     let j = i - 1;

//     while (temp < arr[j] && j > -1) {
//       arr[j + 1] = arr[j];
//       arr[j] = temp;
//       j--;
//     }
//     console.log(arr.join(" "));
//   }

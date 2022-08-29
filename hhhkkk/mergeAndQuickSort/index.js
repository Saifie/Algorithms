function merge(array1, array2) {
  let returnArr = [];
  while (array1.length > 0 && array2.length > 0) {
    let arrFirst = array1[0];
    let arrSecond = array2[0];
    if (arrFirst >= arrSecond) {
      returnArr.push(arrSecond);
      array2.shift();
    } else {
      returnArr.push(arrFirst);
      array1.shift();
    }
  }
  while (array2.length > 0) {
    let arrSecond = array2.shift();
    returnArr.push(arrSecond);
  }
  while (array1.length) {
    let arrFirst = array1.shift();

    returnArr.push(arrFirst);
  }
  return returnArr;
}
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function swaper(arr, swap, i) {
  let temp = arr[swap];
  arr[swap] = arr[i];
  arr[i] = temp;
}

function Pivot(arr, pivotIndx, end) {
  let swap = pivotIndx;
  for (let i = pivotIndx + 1; i <= end; i++) {
    if (arr[i] < arr[pivotIndx]) {
      swap = swap + 1;
      swaper(arr, swap, i);
    }
  }
  swaper(arr, pivotIndx, swap);

  return swap;
}
console.log(Pivot([1, 3, 5, 2, 4, 6, 8, 8, 5]));

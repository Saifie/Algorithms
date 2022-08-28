function lisaWorkBook(n, k, arr) {
  let page = 0;
  let simi = 0;
  for (let i = 1; i <= arr.length; i++) {
    let currElement = arr[i - 1];
    let count = 0;
    page++;
    for (let j = 1; j <= currElement; j++) {
      if (count === k) {
        page++;
        count = 0;
      }
      count++;
      if (page === j) {
        simi++;
      }
    }
  }
  return simi;
}

console.log(lisaWorkBook(5, 3, [4, 2, 6, 1, 10]));

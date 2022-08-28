function checker(str) {
  let leftPointer = 0;
  let rightPointer = str.length - 1;
  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}

function palindromeIndex(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    let firstElement = s[p1];
    let secondElement = s[p2];
    if (firstElement !== secondElement) {
      break;
    }
    p1++;
    p2--;
  }
  let str1 = s.substring(0, p1) + s.substring(p1 + 1, s.length);
  let str2 = s.substring(0, p2) + s.substring(p2 + 1, s.length);
  if (checker(str1)) {
    return p1;
  } else if (checker(str2)) {
    return p2;
  }
  return -1;
}

console.log(palindromeIndex("aaab"));

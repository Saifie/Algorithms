function validPassword(A) {
  let isContainNum = false;
  let isContainCaps = false;
  let isContainSmall = false;
  if (!/[^-a-zA-Z0-9]/gi.test(A)) {
    return 0;
  }
  if (!(A.length >= 8 && A.length <= 15)) {
    return 0;
  }
  for (var i = 0; i < A.length; i++) {
    let currElement = A[i];
    let asciiCode = A.charCodeAt(i);
    if (asciiCode > 64 && asciiCode < 95) {
      isContainCaps = true;
    }
    if (asciiCode >= 95 && asciiCode <= 122) {
      isContainSmall = true;
    }
    if (parseInt(currElement) || parseInt(currElement) === 0) {
      isContainNum = true;
    }
  }
  if (!isContainNum || !isContainSmall || !isContainCaps) {
    return 0;
  }
  return 1;
}

console.log(validPassword("16zW2W&D"));

// A = ['S', 'c', 'a', 'l', 'e', 'r', '@', '1']
// wHiii$xl0

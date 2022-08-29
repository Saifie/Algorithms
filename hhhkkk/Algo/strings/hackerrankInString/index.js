function hackerrankInString(A) {
  let str = "hackerrank";
  let arr = A.split("");

  for (let i = 0; i < str.length; i++) {
    let currElement = str[i];
    let currElementIndex = arr.findIndex((item) => item === currElement);
    if (currElementIndex === -1) {
      return "NO";
    }
    arr = arr.slice(currElementIndex + 1);
    console.log(arr);
  }
  return "YES";
}

console.log(hackerrankInString("hhhackkerbanker"));

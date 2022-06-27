function countingValleys(steps, path) {
  let valley = 0;
  let sealevel = 0;
  for (var i = 0; i < path.length; i++) {
    if (path[i] === "D" && sealevel === 0) {
      valley += 1;
    }
    path[i] === "U" ? (sealevel += 1) : (sealevel -= 1);
  }

  return valley;
}
console.log(countingValleys(8, "DDUUUUDD"));
//  _          /\_
//   \  /\    /
//    \/  \/\/

function separateTheNumber(s) {
  let a = s[0];
  for (var i = 1; i < s.length; i++) {
    let target;
    if (+a === 9658921879781124) {
      target = BigInt(a) + BigInt(1);
    } else {
      target = BigInt(+a + 1);
    }
    let value = "";
    let count = BigInt(0);
    for (let j = a.length; j < s.length; j++) {
      if (target !== BigInt(+value)) {
        value += s[j];
      }
      if (BigInt(+value) < target) {
        continue;
      }
      if (BigInt(+value) > target) {
        break;
      }
      if (BigInt(target) === BigInt(+value)) {
        count++;
        if (j === s.length - 1) {
          console.log("YES " + BigInt(BigInt(value) - count));
          return;
        }
        target++;
        let next;
        if (target.toString().length === value.length) {
          next = s.substring(j + 1, j + 1 + value.length);
          j += value.length - 1;
        } else {
          next = s.substring(j + 1, j + 1 + target.toString().length);
          j += value.length;
        }
        if (next === "") {
          break;
        }
        value = next;
        console.log({ target, next });
      }
    }
    a = a + s[i];
  }
  console.log("NO");
  return;
}

console.log(separateTheNumber("99332720572758669933272057275867"));

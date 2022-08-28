function encryptions(s) {
  let excludes = [" ", ";", ",", ".", "'", "!"];
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    if (!excludes.includes(s[i])) len++;
  }
  let row = Math.floor(Math.sqrt(len));
  let col = Math.ceil(Math.sqrt(len));
  while (row * col <= len) row += 1;
  let encrypt = [];
  for (let i = 0; i < s.length; i = i + col) {
    encrypt.push(s.substring(i, col + i));
  }
  let para = "";
  for (let i = 0; i <= encrypt.length; i++) {
    let newStr = "";
    for (let j = 0; j < encrypt.length; j++) {
      if (!encrypt[j][i]) continue;
      newStr += encrypt[j][i];
    }
    para += newStr + " ";
  }
  return para.trim();
}

console.log(encryptions("haveaniceday"));

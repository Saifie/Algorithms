function manasaAndStones(n, a, b) {
  let glob = [];
  for (let i = 0, j = n - 1; i <= n - 1 && j >= 0; i++, j--) {
    let item = a * i + b * j;
    glob.push(item);
  }
  glob = Array.from(new Set(glob));
  return glob.sort();
}

console.log(manasaAndStones(5, 58, 69));

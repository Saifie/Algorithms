function ladyBugs(b) {
  let hash = {};
  for (let i = 0; i < b.length; i++) {
    let currElement = b[i];
    if (hash[currElement]) {
      hash[currElement]++;
    } else {
      hash[currElement] = 1;
    }
  }
  if (!hash["_"]) {
    for (let i = 0; i < b.length; i++) {
      let currElement = b[i];
      if (currElement !== b[i - 1] && currElement !== b[i + 1]) {
        return "NO";
      }
    }
  }
  for (let i = 0; i < b.length; i++) {
    let currElement = b[i];
    if (currElement === "_") {
      continue;
    } else if (hash[currElement] === 1) {
      return "NO";
    }
  }
  return "YES";
}

console.log(ladyBugs("BAAAB"));

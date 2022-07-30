function camelCase(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let asciiCode = s.charCodeAt(i);
    if (asciiCode <= 90) {
      count++;
    }
  }
  return count + 1;
}
console.log(camelCase("saveChangesInTheEditor"));

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  //   console.log("value not found");
  return "value not found";
}

const arr = [10, 2, 4, 56, 76, 89, 0];
console.log(linearSearch(arr, 4));

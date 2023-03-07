function merge(arrL, arrR) {
  let results = [];
  let l = 0;
  let r = 0;
  while (l < arrL.length && r < arrR.length) {
    if (arrR[r] > arrL[l]) {
      results.push(arrL[l]);
      l++;
    } else {
      results.push(arrR[r]);
      r++;
    }
  }
  while (l < arrL.length) {
    results.push(arrL[l]);
    l++;
  }
  while (r < arrR.length) {
    results.push(arrR[r]);
    r++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 2, 34, 23, 76, 1, 9, 3, 56, 73]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    if (i !== small) {
      [arr[small], arr[i]] = [arr[i], arr[small]];
    }
  }
  console.log(arr);
}

array = [65, 6, 7, 89, 9, 4, 54, 32, 11, 98, 76, 56];
selectionSort(array);

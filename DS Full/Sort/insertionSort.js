function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  console.log(arr);
}

const array = [5, 6, 33, 1, 43, 4, 76, 8, 89, 2, 45];
insertionSort(array);

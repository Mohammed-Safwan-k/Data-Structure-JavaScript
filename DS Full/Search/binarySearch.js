function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] == val) {
    console.log("element is found at position", mid + 1);
  } else {
    console.log("OOPS! No value found");
  }
}

const array = [0, 1, 6, 7, 8, 9, 10, 11, 15, 20, 33, 54, 62];
binarySearch(array, 1);

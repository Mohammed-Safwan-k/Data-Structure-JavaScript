// Javascript program for Selection sort 

// Function for swapping elements
// function swap(arr, xp, yp) {
//     var temp = arr[xp]
//     arr[xp] = arr[yp]
//     arr[yp] = temp
// }

function selectionSort(arr) {
    var min_idx;
    for (let i = 0; i < arr.length - 1; i++) {
        min_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        var temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

// Print Array
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

var arr = [64, 25, 12, 22, 11, 1]

selectionSort(arr)
printArray(arr)
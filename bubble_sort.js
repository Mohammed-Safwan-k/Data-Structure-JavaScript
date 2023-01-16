// Javascript program for Bubble sort 

// Function for swapping elements
// function swap(arr, xp, yp) {
//     var temp = arr[xp]
//     arr[xp] = arr[yp]
//     arr[yp] = temp
// }

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap(arr,j,j+1);    OR
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
}

// Print Array
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

var arr = [10,20,5,4,35,45,1,2]

bubbleSort(arr)
printArray(arr)
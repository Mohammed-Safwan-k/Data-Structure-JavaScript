// Javascript program for insertion sort 

// Function to sort an array using Insertion Sort
function insertionSort(arr) {
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        //shifting of elements
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Print array
function printArray(arr) {
    let i;
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])

    }
}


let arr = [45, 10, 2, 25, 20, 30, 1]

// insertionSort(arr)
// printArray(arr)
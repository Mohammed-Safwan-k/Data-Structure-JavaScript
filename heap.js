class MaxBinaryHeap {
    constructor(element) {
        this.values = element;
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) {
                break;
            } else {
                this.values[parentIndex] = element;
                this.values[index] = parent;
                index = parentIndex;

            }
        }
        console.log(this.values);
    }
}

let arr = [5,10,15,16,18,19,22]
let heap = new MaxBinaryHeap(arr);
heap.insert(55)
heap.insert(1)
// heap.insert(100)
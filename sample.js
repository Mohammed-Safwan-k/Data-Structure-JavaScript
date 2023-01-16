var head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

var head = new Node("hai");
var second = new Node("hello");

head.next = second;


function print() {
    var a = head;
    while(a != null){
        console.log(a.data)
        a = a.next
    }
}

print();
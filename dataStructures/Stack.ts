// The main concept of "Stack" is the pop() & push(val) methods, there are a lot of ways to implement this kind of data structure.

// 1. Array
const arr: string[] = [];
arr.push("a"); // ['a']
arr.push("b"); // ['a','b']
arr.length; // 2
arr.pop(); // ['a']
arr.length; // 1

// 2. Linked list
class StackNode {
    val: string | number;
    next: StackNode | null;
    constructor(val: string | number) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    top: StackNode | null;
    size: number;
    constructor() {
        this.top = null;
        this.size = 0;
    }

    public push(val: string | number) {
        if (this.size === 0) {
            this.top = new StackNode(val);
            this.size++;
        } else {
            const newNode = new StackNode(val);
            newNode.next = this.top;
            this.top = newNode;
            this.size++;
        }
    }

    public pop() {
        if (this.size === 1) {
            this.top = null;
            this.size--;
        } else {
            this.top = this.top?.next || null;
            this.size--;
        }
    }
}

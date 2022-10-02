// The main concept of a queue is the First-In-First-Out. think about that like operations that need to run in a synchronous way one after another.
class QueueNode {
    val: any;
    next: QueueNode | null;
    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    val: any;
    front: QueueNode | null;
    back: QueueNode | null;
    size: number;
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    public enqueue(val: any) {
        const newNode = new QueueNode(val);
        if (this.size === 0) {
            this.front = newNode;
            this.back = newNode;
            this.size++;
        } else {
            if (this.back !== null) this.back.next = newNode;
            this.back = newNode;
            this.size++;
        }
    }

    public dequeue() {
        if (this.size === 1) {
            const nodeToShift = this.front;
            this.front = null;
            this.back = null;
            this.size--;
            return nodeToShift!.val;
        } else {
            const nodeToShift = this.front;
            this.front = this.front!.next;
            this.size--;
            return nodeToShift!.val;
        }
    }
}

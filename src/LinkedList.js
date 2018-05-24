class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        if (this.length === 0) { this.head = value }
        this.tail = value;
        this.length++;

        if (this.length > 1) {
            const lastNode = this.get(this.length - 2);
            lastNode.next = this.tail;
        }
    }

    pop() {
        const lastNode = this.get(this.length - 2);
        lastNode.next = null
        const poppedTail = this.tail;
        this.tail = lastNode;
        this.length--;
        return poppedTail;
    }

    _find(value){

    }

    _test(a, b) {}
    _testIndex(search, __, i) { return search === i }

    get(index) {
        if (index > this.length - 1) {
            return undefined;
        }
        else if (this.length > 1) {
            let foundNode = this.head;
            for (var i = 0; i < index; i++) {
                foundNode = foundNode.next;
            }
            return foundNode;
        } else if (this.length === 1) {
            return this.head;
        } else {
            return undefined;
        }
    }

    delete(index) {
        const nodeBefore = this.get(index - 1);
        const nodeAfter = this.get(index + 1);
        const isHead = (index === this.length - 1);
        const isTail = (index === this.length - 1);

        if (isHead) {
            this.head = nodeAfter;
        } else if (isTail) {
            nodeBefore.next = null;
            this.tail = nodeBefore;
        } else {
            nodeBefore.next = nodeAfter;
        }
        this.length--;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


const linkedList = new LinkedList();
linkedList.push(new Node('one'))
linkedList.push(new Node('two'))
linkedList.push(new Node('three'))
linkedList.push(new Node('four'))
linkedList.push(new Node('five'))


// console.log('pop',linkedList.pop())
linkedList.delete(0);
console.log(linkedList)
// console.log(linkedList.get(0).next)
// console.log(linkedList.get(0).next.next)

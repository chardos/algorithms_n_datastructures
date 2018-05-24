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
        // remove .next on second last node
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


console.log(linkedList)
console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))
console.log('pop',linkedList.pop())
console.log(linkedList)

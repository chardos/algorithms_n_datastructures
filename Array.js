class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(value) {
        this.data[this.length] = value;
        this._increaseLength();
    }

    pop() {
        const lastItemIndex = this.length - 1;
        const item = this.data[lastItemIndex];
        delete this.data[lastItemIndex];
        this._reduceLength();
        return item;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        // shift all items from the index higher down one
        for (var i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        // remove the last item
        delete this.data[this.length - 1];
        this._reduceLength();
    }

    _collapseTo(index) {}

    _reduceLength() {
        this.length = this.length - 1;
    }

    _increaseLength() {
        this.length = this.length + 1;
    }
}

const arr = new ArrayList();

arr.push("one");
arr.push("two");
arr.push("three");
arr.push("four");
arr.push("five");
arr.delete(2);
console.log(arr);
arr.push("one");
console.log(arr);
arr.pop();
console.log(arr);

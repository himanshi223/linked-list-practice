class LinkedList {
    constructor(){
        this._head;
        this._tail;
        this._size = 0;
    }

    append(value){
        if(!this._head && !this._tail) {
            this._head = new Node(value,null);
            this._tail = this._head;
        }
        else {
            const lastNode = this._tail;
            this._tail = new Node(value,null);
            lastNode.nextNode = this._tail;
        }
        this._size++;
    }

    prepend(value){
        const currentHead = this._head;
        this._head = new Node(value, currentHead);
        this._size++;
    }

    size(){
        return this._size;
    }

    head(){
        return this._head.value;
    }

    tail(){
        return this._tail.value;
    }

    at(index){
        if(this._size === 0) return;
        let currentNode = this._head;
        for(let i=0;i<index;i++){
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    pop(){
        if(this._size === 0) return;
        const topNode = this._head;
        this._head = topNode.nextNode;
        this._size--;
        return topNode.value;
    }

    contains(value){
        let currentNode = this._head;
        for(let i=0;i<this._size;i++){
            if(currentNode.value === value)
                return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    findIndex(value){
        let currentNode = this._head;
        for(let i=0;i<this._size;i++){
            if(currentNode.value === value)
                return i;
            currentNode = currentNode.nextNode;
        }
        return -1;
    }

    toString(){
        let result = "";
        let currentNode = this._head;

        for(let i=0;i<this._size;i++){
            result+= `( ${currentNode.value} ) -> `
            if(currentNode.nextNode === null) result+= "null";
            currentNode = currentNode.nextNode;
        }
        return result;
    }

    insertAt(index, ...values){
        if(index<0 || index>this._size) throw new RangeError();
        let currentNode = this._head;

        for(let i=0;i<index;i++){
            currentNode = currentNode.nextNode;
        }

        values.forEach(value => {
            const newNode = new Node(value, currentNode.nextNode);
            currentNode.nextNode = newNode;
            currentNode = currentNode.nextNode;
            this._size++;
        })
    }

    removeAt(index){
        if(index<0 || index>=this._size) throw new RangeError();
        let currentNode = this._head;
        let previousNode = null;

        for(let i=0;i<index;i++){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        previousNode.nextNode = currentNode.nextNode;
        this._size--;
    }
}

class Node {
    value = null;
    nextNode = null;
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}

export {LinkedList};
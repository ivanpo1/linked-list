class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        const oldHead = this.head;
        this.head = newNode;
        this.head.next = oldHead;

    }

    size() {
        let currentNode = this.head;
        let size = 0;

        while(currentNode) {
            currentNode = currentNode.next;
            size++;
        }

        return size;
    }

    get Head() {
        if (!this.head) return;

        return this.head;
    }

    tail() {
        let currentNode = this.head;

        while (currentNode && currentNode.next) {
            currentNode = currentNode.next
        }

        return currentNode;
    }

    at(index) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;

            if (!currentNode) {
                return null;
            }
        }

        return currentNode.value;
    }

    pop() {
        if (!this.head) return null;

        if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }

        let currentNode = this.head;

        while (currentNode.next.next) {
            currentNode = currentNode.next
        }

        const value = currentNode.next.value;
        currentNode.next = null;
        return value;
    }

    contains(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.next;
        }

        return false;
    }

    find(value) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (true) {
            if(currentNode.value === value) {return currentIndex}
            currentNode = currentNode.next;
            if(!currentNode) {break}
            currentIndex++;
        }

        return null;
    }


    toString() {
        let currentNode = this.head;
        let concat = '';

        while (currentNode) {
            concat += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }

        return concat + 'null'
    }

}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())

console.log('Index:', list.find('hamster'))
console.log('Number of Nodes:', list.size());
list.prepend('testing')
console.log('head', list.head)

console.log(list.toString())

list.pop()
console.log(list.toString())


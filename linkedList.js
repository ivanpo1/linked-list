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

        return currentNode;
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

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode && currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (!currentNode) {
            console.log("Index out of bounds");
            return;
        }

        const newNode = new Node(value, currentNode.next)
        currentNode.next = newNode;


        // currentNode.next = value;
        // currentNode.next = currentNode.next.next;

    }

    removeAt(index) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode && currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (!currentNode || !currentNode.next) {
            console.log("Index out of bounds");
            return;
        }

        currentNode.next = currentNode.next.next

    }

}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}


export default LinkedList;
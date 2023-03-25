class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class linkedlist {
    constructor() {
        this.head = {
            value:null,
            next:null
        }
        this.tail = this.head
    }


    appent(value) {
        const node = new Node(value)

        if(this.head.value === null) {
            this.head = node
        }
        else {
            this.tail.next = node
        }
        this.tail = node
    }
}

let linklist = new linkedlist()
linklist.appent(10)
linklist.appent(20)
console.log(linklist)


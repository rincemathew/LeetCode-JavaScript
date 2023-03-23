// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

class DoublyLinkedList {

    constructor(){
        this.head = 
        {
            value:null,
            next:null,
            prev:null
        }
        this.tail = this.head
    }

    addNode(value){ //append, add items to last
        //creating a new node
        // const newNode = new Node(value)
        const newNode= {
            value:value,
            next:null,
            prev:null
        };
        if(this.head.value == null) {
            this.head = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
        }
        this.tail = newNode
        // return this;
    }

    prepend(value) { // add values to first
        // const newNode = new Node(value)
        const newNode= {
            value:value,
            next:null,
            prev:null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }

    display() {
        if(this.head == null){
            console.log('noting here')
        } else {
            const array = [];
            let temp = this.head;
            while(temp !== null) {
                array.push(temp.value);
                temp = temp.next
            }
            return array
        }
    }

    insert(index, value) {
        const newNode = {
            value:value,
            next:null,
            prev:null
        }
         let counter= 0
         let currentNode = this.head
         while(counter !== index-1) {
            currentNode = currentNode.next
            counter++
         }
         const holdAPoint = currentNode.next
         currentNode.next = newNode
         newNode.prev = currentNode
         newNode.next = holdAPoint
         holdAPoint.prev = newNode
    }

    remove(index) {
        let counter = 0
        let currentNode = this.head
        while(counter !== index-1) {
            currentNode = currentNode.next
            counter++
        }
        const unWantedNode = currentNode.next
        currentNode.next = unWantedNode.next
    }
}
const dLinkList = new DoublyLinkedList()

// console.log(sLinkList)
// sLinkList.display()
dLinkList.addNode(5)
dLinkList.addNode(6)
dLinkList.addNode(7)
dLinkList.prepend(1)
dLinkList.prepend(2)
dLinkList.prepend(3)
console.log(dLinkList.display())
dLinkList.insert(2, 99)
console.log(dLinkList.display())
// dLinkList.remove(4)
// console.log(dLinkList.display())
// sLinkList.display()
console.log(dLinkList)
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

class SingleLinkedList {

    constructor(){
        this.head = 
        {
            value:null,
            next:null
        }
        this.tail = this.head
    }

    addNode(value){ //append, add items to last
        //creating a new node
        // const newNode = new Node(value)
        const newNode= {
            value:value,
            next:null
        };
        if(this.head.value == null) {
            this.head = newNode
        } else {
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
        }
        newNode.next = this.head
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
            next:null
        }
         let counter= 0
         let currentNode = this.head
         while(counter !== index-1) {
            currentNode = currentNode.next
            counter++
         }
         const holdAPoint = currentNode.next
         currentNode.next = newNode
         newNode.next = holdAPoint
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
const sLinkList = new SingleLinkedList()

// console.log(sLinkList)
// sLinkList.display()
sLinkList.addNode(5)
sLinkList.addNode(6)
sLinkList.addNode(7)
sLinkList.prepend(1)
sLinkList.prepend(2)
sLinkList.prepend(3)
console.log(sLinkList.display())
sLinkList.insert(2, 99)
console.log(sLinkList.display())
sLinkList.remove(4)
console.log(sLinkList.display())
// sLinkList.display()
// console.log(sLinkList)
class Node {
    constructor(data, next =null){
        this.data = data;
        this. next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Inster first node

    instertFirst(data) {
        this.head = new Node(data, this.head);
        this.size ++;
    }

    // Instert last node

    insertLast(data){
        let node = new Node(data)
        let current;

        // if empty, make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;

        }
        this.size ++;
    }

    // instert at index

    insertAt(data, index){

        // if index is out of range
        if(index > 0 && index > this.size){
            return;
        }
        // if first index
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        
        const node = new Node(data);
        let current, previous;

        current = this.head; 
        let count = 0;

        while(count < index){
            previous = current;
            count++;
            current = current.next; 
        }

        node.next = current;
        previous.next = node;
    }

    // get at index

    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count === index){
                console.log(`is: ${current.data}`)
            }
            count ++;
            current = current.next;
        }
        return null;
    }
    // remove at index

    removeAt(index) {
        if(index > 0 && index > this.size){
            return
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.next
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;   
        }
        this.size--;

    }

    // clear list

    clearList(){
        this.head = null;
        this.size = 0;
    }

    // print list data
    printListData(){
        let current =  this.head;

        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.instertFirst(100);
ll.instertFirst(200);
ll.instertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);
ll.getAt(3)
ll.removeAt(3)
ll.clearList()

ll.printListData();

// complejidad O(n) and O(1) in add head
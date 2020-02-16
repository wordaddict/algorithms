class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
        return this.queue;
    };

    dequeue(){
        if(this.queue.length === 0){
            return
        }
        return this.queue.shift();
    }

    peek(){
        if(this.queue.length === 0){
            return
        }
        return this.queue[0]
    }

    list(){
        return this.queue;
    }
}

const q = new Queue();
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)

console.log('list', q.list())
console.log('peak', q.peek())
console.log('list 2', q.list())
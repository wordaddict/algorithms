const Stack = require('./stack')

class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
        return this.queue;
    };

    // Adds to the top of the queue
    front(){
        return this.queue[0]
    }

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

    isEmpty(){
        return this.queue.length === 0 ? true : false;
    }

    size(){
        return this.queue.length;
    }
}

module.exports = Queue

const q = new Queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.enqueue(60)

console.log('list', q.list())
console.log('peak', q.peek())
console.log('list 2', q.list())

const reverse = (q, k) => {
    const s = new Stack();
    for (let i = 0; i < k; i++){
     
        s.push(q.peek())
        q.dequeue()
    }


    while(!s.empty()){
        q.enqueue(s.top())
        s.pop()
    }

    for(let i = 0; i < q.size() - k; i++){
        q.enqueue(q.front())
        q.dequeue()
    }
    return q;
}

const data = [10, 20, 30, 40, 50, 60];
console.log('solution', reverse(q, 4));
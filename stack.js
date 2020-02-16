class Stack {
    constructor(){
        this.stack = [];
    }

    push(item){
        this.stack.push(item);
        return this.stack;
    };

    pop(){
        if(this.stack.length === 0){
            return
        }
        return this.stack.pop();
    }

    top(){
        if(this.stack.length === 0){
            return
        }
        return this.stack[this.stack.length - 1]
    }

    list(){
        return this.stack;
    }
}

const s = new Stack();
s.push(5)
s.push(6)
s.push(7)

console.log('list', s.list())
console.log('pop', s.pop())
console.log('peak', s.top())
console.log('list 2', s.list())
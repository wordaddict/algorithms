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

    // back(){
    //     return this.stack[0]
    // }

    empty(){
        return this.stack.length === 0 ? true : false;
    }

    list(){
        return this.stack;
    }

    size(){
        return this.stack.length;
    }
}

module.exports = Stack;

// const s = new Stack();
// s.push(5)
// s.push(6)
// s.push(7)

// console.log('list', s.list())
// console.log('pop', s.pop())
// console.log('peak', s.top())
// console.log('list 2', s.list())
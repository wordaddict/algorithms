class Node {
    constructor(key, value, next = null, prev = null){
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev
    }
}

class LRU {
    constructor(limit = 10){
        this.size = 0;
        this.limit = limit;
        this.head = null;
        this.tail = null;
        this.cache = {};
    }

    write(key, value){
        if(!this.head){
            this.head = this.tail = new Node(key, value);
        } else {
            const node = new Node(key, value, this.head);
            this.head.prev = node;
            this.head = node
        }

        // update the cache map
        this.cache[key] = this.head;
        this.size ++;
    }

    read(key){
        if(this.cache[key]){
            const value = this.cache[key].value;
            // remove key

            this.write(key, value);
            return value
        }
    }

    remove(key){
        const node = this.cache[key];
    }
}
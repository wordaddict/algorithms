// Linked list
class Node {
    constructor(key, value, next = null, prev = null){
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev
    }
};

// least recently used cache

class LRU {
    // set default rate limit to 10 if not passed
    constructor(limit = 10){
        this.size = 0;
        this.limit = limit;
        this.head = null;
        this.tail = null;
        this.cache = {};
    }

    write(key, value){
        this.ensureLimit();
        if(!this.head){
            this.head = this.tail = new Node(key, value);
        } else {
            const node = new Node(key, value, this.head);
            this.head.prev = node;
            this.head = node;
        }

        // update the cache map
        this.cache[key] = this.head;
        this.size++;
    };

    read(key){
        if(this.cache[key]){
            const value = this.cache[key].value;

            // node removed from its position and cache
            this.remove(key);

            // write node again to the end of the linked list to make it the most recently used
            this.write(key, value);
            return value;
        };
        console.log(`Item not available in cache for key ${key}`);
    }

    ensureLimit(){
        if(this.size === this.limit){
            this.remove(this.tail.key)
        }
    }

    remove(key){
        const node = this.cache[key];
        if(node.prev !== null){
            node.prev.next = node.next;
        } else {
            this.tail = node.prev
        }

        if(node.next !== null){
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
        delete this.cache[key];
        this.size--;
    }
}
var copyRandomList = function(head) {
    if (!head) return head;
    
    var cur = head;
    
    // In this block we create the new nodes and set their "next" pointers.
    // We also change the "next" pointers of the existing nodes.
    while(cur) {
        var tmp = cur.next;
        var newNode = new Node(cur.val, cur.next, null);
        cur.next = newNode;
        
        cur = tmp;
    }
    
    cur = head;
    
    // In this block we set the "random" pointer of the new nodes.
    while (cur) {
        if (!cur.next) {
            break
        }
        cur.next.random = cur.random ? cur.random.next : null;
        cur = cur.next.next;
    }
    
    cur = head;
    result = head.next;
    
    // In this block we set the "next" pointer of the new nodes.
    // We also restore the "next" pointer of the old nodes.
    while (cur) {
        var tmp = cur.next.next
        cur.next.next = tmp ? tmp.next : null;
       
        cur.next = tmp;
        cur = tmp;
    }
    
    return result;
};
class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

const addTwoLinkedList = (l1, l2) => {
    const l3 = new ListNode(0);
    let currentNode = l3;
    let carry = 0;
    let x = l1;
    let y = l2;

    while(x !== null || y !== null){
        const v1 = (x !== null) ? x.val : 0;
        const v2 = (y !== null) ? y.val : 0;
        const sum = v1 + v2 + carry;
        carry = Math.trunc(sum / 10)
        currentNode.next = new ListNode(sum % 10);
        if(x !== null){
            x = x.next;
        }

        if(y !== null){
            y = y.next;
        }
    }
    if(carry > 0){
        currentNode.next = new ListNode(carry)
    };
    return l3.next;
};

const mergeKList = (list) => {
    let finalArray = [];
    let head = new ListNode(0);
    let point = head;
    for (let each of list){
        while(each){
            finalArray.push(each.val);
            each = each.next;
        }
    }

    finalArray.sort((a, b) => {
        return a - b;
    });

    for (let node of finalArray){
        point.next = new ListNode(node);
        point = point.next;
    }
    return head.next;
};

// copy random list
const copyRandomList = (head) => {
    if(!head){
        return;
    };
    let curr = head;

    while(curr){
        const tmp = curr.next;
        const newNode = new ListNode(curr.val, curr.next, null);
        curr.next = newNode;
        curr = tmp;
    }

    curr = head
    while(curr){
        if(!curr.next){
            break;
        };
        curr.next.random = curr.random ? curr.random.next : null;
        curr = curr.next.next
    };

    curr = head;
    let result = head.next;
    while (curr){
        let temp = curr.next.next;
        curr.next.next = tmp ? tmp.next : null;
        curr.next = next;
        curr = tmp;
    }
    return result;
};

// merge tow linked list
const mergeTwoLinkedList  = (l1, l2) => {
    if(l1 === null && l2 === null){
        return null;
    };

    if(l1 === null){
        return l2;
    } else if(l2 === null){
        return l1;
    } else if(l1.val < l2.val){
        l1.next = mergeTwoLinkedList(l1.next, l2)
    } else {
        l2.next = mergeTwoLinkedList(l1, l2.next)
    }
}

// reverse k group on a linked list
const reverseKGroup = (head, k) => {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;
    while(count < k && current !== null){
        next = current.next;
        current.next = prev;
        prev = next;
        current = next;
    };

    if(next !== null){
        head.next = reverseKGroup(next, k)
    }
    return prev;
}
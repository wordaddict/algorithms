// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const mergeKLists = (lists) => {
    let nodes = [];
    let head = new ListNode(0)
    let point = head
    for (let l of lists){
        while (l){
            nodes.push(l.val)
            l = l.next
        }
    }
    // sort node
    let sortedArray = nodes.sort((a, b) => {
        return a - b
    })

    for (let x of sortedArray){
        point.next = new ListNode(x)
        point = point.next
    }
    return head.next
}

console.log('sol', mergeKLists([[1,4,5],[1,3,4],[2,6]]))
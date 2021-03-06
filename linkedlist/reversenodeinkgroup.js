/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 // write this guy
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var node = new ListNode(0)
   node.next = head
   var pre = node
   
   var arr = []
   var next
   for(var i = 0; i <= k; i++){
       arr.push(pre)
       if(!pre) return node.next
       pre = pre.next
   }
   next = arr[k].next
   arr[0].next = arr[k]
   arr[1].next = next
   pre = arr[1]
   for(var i = k; i >= 0; i--){
       if(i === 1 || i === 0){
           break
       }
       arr[i].next = arr[i - 1]
   }
   
   pre.next = reverseKGroup(pre.next, k)
   
   return node.next
};

// Using recursion
const reverseKGroup = (head, k) => {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;
    while(count < k && current !== null){
        // save next
        next = current.next;
        // make next be null
        current.next = prev;
        prev = next;
        current = next;
    };

    if(next !== null){
        head.next = reverseKGroup(next, k)
    };

    return prev;
}
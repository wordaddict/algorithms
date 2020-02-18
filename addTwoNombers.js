var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let carry = 0;
    let currentNode = l3;
    let sum = 0;
    let x = l1;
    let y = l2;
    
    while(x !== null || y !==null)
        {
            let value1 = (x!== null) ? x.val : 0;
            let value2 = (y!== null) ? y.val : 0;
            console.log('value1:',value1,'value2:',value2);
            sum = (value1+value2+carry);
            carry = Math.trunc(sum/10);
            currentNode.next = new ListNode(sum%10);
            currentNode = currentNode.next;
            
           if(x!== null)
            {
                x = x.next;
            }
            if(y!== null)
            {
                y = y.next;
            }
            
        }
    if(carry > 0)
    {
       currentNode.next = new ListNode(carry);         
    }
    return l3.next;
};
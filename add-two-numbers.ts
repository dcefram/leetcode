/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let cursor1: ListNode | null = l1;
    let cursor2: ListNode | null = l2;
    let output: ListNode | null = null;
    let outputCursor: ListNode | null = output;
    let carryOver = 0;
    
    while (cursor1 || cursor2) {
        const val1 = cursor1 ? cursor1.val : 0;
        const val2 = cursor2 ? cursor2.val : 0;
        
        const sum = val1 + val2 + carryOver;
        const node = new ListNode(sum % 10);
        
        if (!output) {
            output = node;
            outputCursor = output;
        } else {
            outputCursor.next = node;
            outputCursor = outputCursor.next;
        }
        
        if (sum > 9) {
            carryOver = Math.floor(sum / 10);
        } else {
            carryOver = 0;
        }
        
        if (cursor1) {
            cursor1 = cursor1.next;
        }
        
        if (cursor2) {
            cursor2 = cursor2.next;
        }
    }
    
    if (carryOver > 0) {
        const node = new ListNode(carryOver);
        outputCursor.next = node;
    }
    
    return output;
};

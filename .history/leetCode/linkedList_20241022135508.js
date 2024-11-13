function ListNode(val, next = null) {  // Node constructor for the linked list
    this.val = val;
    this.next = next;
}

var middleNode = function(head) {
    let slow = head;  // Slow pointer moves 1 step
    let fast = head;  // Fast pointer moves 2 steps

    while (fast !== null && fast.next !== null) {  // Traverse the list
        slow = slow.next;  // Move slow pointer 1 step
        fast = fast.next.next;  // Move fast pointer 2 steps
    }

    return slow;  // When fast pointer reaches the end, slow pointer is at the middle
};

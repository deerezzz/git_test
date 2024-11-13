// Definition for singly-linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to create a linked list from an array of values
function createLinkedList(values) {
    if (values.length === 0) return null;  // Edge case: empty array

    let head = new ListNode(values[0]);  // Create the head node
    let current = head;  // Pointer to the current node

    // Iterate through the array to create the linked list
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);  // Create and link the next node
        current = current.next;  // Move to the next node
    }

    return head;  // Return the head of the linked list
}

// Function to find the middle node of a linked list
var middleNode = function(head) {
    let slow = head;  // Slow pointer moves 1 step
    let fast = head;  // Fast pointer moves 2 steps

    while (fast !== null && fast.next !== null) {  // Traverse the list
        slow = slow.next;  // Move slow pointer 1 step
        fast = fast.next.next;  // Move fast pointer 2 steps
    }

    return slow;  // Slow pointer is at the middle node
};

// Example usage
let values = [1, 2, 3, 4, 5, 6];  // Array of values
let head = createLinkedList(values);  // Create linked list from array

// Find and log the middle node's value(s)
let middle = middleNode(head);
let result = [];
while (middle !== null) {
    result.push(middle.val);  // Collect node values starting from the middle
    middle = middle.next;  // Move to the next node
}

console.log(result);  // Output: [4, 5, 6]

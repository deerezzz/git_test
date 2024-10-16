var checkTree = function(root) {
    // Access the values of the root and its children
    let leftChildValue = root.left.val; 
    let rightChildValue = root.right.val;
    
    // Check if the root value equals the sum of the left and right child values
    if (root.val === leftChildValue + rightChildValue) {
        return true; 
    } else {
        return false; 
    }
};

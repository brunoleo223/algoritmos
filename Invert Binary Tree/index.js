function solution(tree) { 
    if(!tree || tree.left == null && tree.right == null){
        return tree
    }
    
    var oldLeft = tree.left;
    tree.left = tree.right;
    tree.right = oldLeft;
    
    if(tree.left) solution(tree.left)
    if(tree.right) solution(tree.right)
    
    return tree;
}

function solution(root) {
    if (root == null) return 0;
	    
    if (root.left == null || root.right == null) return 1;

    const left = solution(root.left) + 1;
    const right = solution(root.right) + 1;

    return left < right ? left : right;
    
}
function solution(tree1, tree2) {
    var queue = Queue();
    queue.add({'t1': tree1, 't2': tree2});
    
    while (!queue.isEmpty()) {
        var item = queue.pop();
        
        var t1 = item['t1'];
        var t2 = item['t2'];
        
        if (t1 === null || t2 === null) {
            if (t1 === t2) {
                continue;
            }
            return false;
        }
        
        if (t1.value !== t2.value) {
            return false;
        }
        queue.add({'t1': t1.left, 't2': t2.left});
        queue.add({'t1': t1.right, 't2': t2.right});
    }
    
    return true;
}

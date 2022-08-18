
class MyLinkedList {
    constructor() {
        this._head = new Node(null)
    }
    
    insert_node_to_tail(node) {
        this.tail().next = node;
    }
    
    insert_node_to_head(node) {
        if (this._head.next) {
            const head_element = this._head;
            
            const tmp = head_element.next;
            node.next = tmp;
            head_element.next = node;
        }
        this._head.next = node;
    }
    
    is_empty() {
        return this._head.next === null;
    }
    
    head() {
        return this._head.next;
    }
    
    tail() {
        var current = this._head;
        while (current.next != null)
        current = current.next;
        
        return current;
    }
}

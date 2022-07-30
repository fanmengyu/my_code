/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let node = new ListNode(0, head);
    let cur = node;
    while(cur.next) {
        if (cur.next.val == val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return node.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }

    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};


// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert a linked list to an array for comparison
function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}


// Jest tests
describe('deleteDuplicates', () => {
    it('should handle empty list', () => {
        expect(deleteDuplicates(null)).toBeNull();
    });

    it('should handle list with no duplicates', () => {
        const head = createLinkedList([1, 2, 3]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle list with duplicates', () => {
        const head = createLinkedList([1, 1, 2]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1, 2]);
    });

    it('should handle list with multiple duplicates', () => {
        const head = createLinkedList([1, 1, 2, 3, 3]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle list with all duplicates', () => {
        const head = createLinkedList([1,1,1,1]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1]);
    });

    it('should handle a single node list', () => {
        const head = createLinkedList([1]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1]);
    });

    it('should handle a list with duplicates at the beginning', () => {
        const head = createLinkedList([1,1,2,2,3]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1,2,3]);
    });

    it('should handle a list with duplicates at the end', () => {
        const head = createLinkedList([1,2,2,3,3]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1,2,3]);
    });
});
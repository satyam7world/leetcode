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
var deleteDuplicates = function (head) {

    return head;
};

function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

let testCases = [
    [1, 1, 2],
    // [1, 1, 2, 3, 3],
    // [1, 1, 1],
    // [1, 2, 3, 4, 5],
    // [],
    // [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5]
];

for (let test of testCases) {
    let inputList = arrayToLinkedList(test);
    let result = deleteDuplicates(inputList);
    // console.log(linkedListToArray(result));
    console.log('result ', result)
}

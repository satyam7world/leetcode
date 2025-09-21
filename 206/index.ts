// reverseLinkedList.ts

// Definition for singly-linked list
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Function to reverse a linked list
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        const next: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

// Helper function: convert array to linked list
function arrayToList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function: convert linked list to array
function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
function runTests() {
    const tests: number[][] = [
        [1, 2, 3, 4, 5],
        [1, 2],
        [],
        [10],
        [1, 2, 3]
    ];

    for (let i = 0; i < tests.length; i++) {
        const head = arrayToList(tests[i]);
        const reversed = reverseList(head);
        console.log(`Input: ${JSON.stringify(tests[i])} -> Reversed: ${JSON.stringify(listToArray(reversed))}`);
    }
}

console.log('starting...')

runTests();

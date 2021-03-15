// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


//Time Complexity - O(n)
var reverseList = function(head) {
    //Hold the Previous Variable
    let previous = null;

    //Breaks when head.next does not exist
    while(head){
        //Temporarily hold the value of head while we change head
        let temp = head;

        //Move head forward
        head = head.next;

        //Use the stored valued of head to point at the previous
        temp.next = previous;

        //Update previous to be temp (which was the head)
        previous = temp;
    }

    return previous;
}